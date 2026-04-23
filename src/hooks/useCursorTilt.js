import { useRef, useCallback } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

const isFinePointer = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches

export function useCursorTilt({
    maxTilt = 4,
    maxParallax = 14,
    spring = { stiffness: 220, damping: 28, mass: 0.6 },
} = {}) {
    const ref = useRef(null)

    const nx = useMotionValue(0.5)
    const ny = useMotionValue(0.5)
    const lift = useMotionValue(0)

    const sx = useSpring(nx, spring)
    const sy = useSpring(ny, spring)
    const sLift = useSpring(lift, { stiffness: 180, damping: 22 })

    const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt])
    const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt])

    const parallaxX = useTransform(sx, [0, 1], [maxParallax, -maxParallax])
    const parallaxY = useTransform(sy, [0, 1], [maxParallax, -maxParallax])

    const spotlightX = useTransform(sx, v => `${v * 100}%`)
    const spotlightY = useTransform(sy, v => `${v * 100}%`)
    const translateY = useTransform(sLift, [0, 1], [0, -8])
    const shadowBlur = useTransform(sLift, [0, 1], [24, 48])

    const onMouseMove = useCallback((e) => {
        if (!ref.current || !isFinePointer() || prefersReducedMotion()) return
        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        nx.set(Math.max(0, Math.min(1, x)))
        ny.set(Math.max(0, Math.min(1, y)))
    }, [nx, ny])

    const onMouseEnter = useCallback(() => {
        if (!isFinePointer() || prefersReducedMotion()) return
        lift.set(1)
    }, [lift])

    const onMouseLeave = useCallback(() => {
        nx.set(0.5)
        ny.set(0.5)
        lift.set(0)
    }, [nx, ny, lift])

    return {
        ref,
        handlers: { onMouseMove, onMouseEnter, onMouseLeave },
        tilt: { rotateX, rotateY, translateY },
        parallax: { x: parallaxX, y: parallaxY },
        spotlight: { x: spotlightX, y: spotlightY },
        shadow: { blur: shadowBlur },
    }
}
