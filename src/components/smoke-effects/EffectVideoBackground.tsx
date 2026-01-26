import { useEffect, useRef, useState } from 'react'

export default function EffectVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const trailsRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    size: number; opacity: number; rotation: number; rotSpeed: number;
  }>>([])
  const lastSpawnRef = useRef(0)
  const [isPortrait, setIsPortrait] = useState(window.innerHeight > window.innerWidth)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setIsPortrait(window.innerHeight > window.innerWidth)
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      trailsRef.current = trailsRef.current.filter(t => t.opacity > 0.01)
      trailsRef.current.forEach(t => {
        // Update
        t.x += t.vx
        t.y += t.vy
        t.vy -= 0.012
        t.vx *= 0.99
        t.vy *= 0.99
        t.size += 0.25
        t.opacity *= 0.97
        t.rotation += t.rotSpeed
        // Draw
        if (t.opacity >= 0.01) {
          ctx.save()
          ctx.translate(t.x, t.y)
          ctx.rotate(t.rotation)
          const g = ctx.createRadialGradient(0, 0, 0, 0, 0, t.size)
          g.addColorStop(0, `rgba(255,255,255,${t.opacity})`)
          g.addColorStop(0.35, `rgba(230,230,240,${t.opacity * 0.65})`)
          g.addColorStop(1, 'rgba(190,190,200,0)')
          ctx.fillStyle = g
          ctx.beginPath()
          ctx.ellipse(0, 0, t.size, t.size * 0.7, 0, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })
      requestAnimationFrame(animate)
    }
    animate()

    const updatePosition = (clientX: number, clientY: number) => {
      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      mouseRef.current.x = clientX
      mouseRef.current.y = clientY

      // Spawn smoke trails
      const now = Date.now()
      if (mouseRef.current.prevX !== 0 && now - lastSpawnRef.current > 25 && trailsRef.current.length < 70) {
        const vx = clientX - mouseRef.current.prevX
        const vy = clientY - mouseRef.current.prevY
        const speed = Math.sqrt(vx * vx + vy * vy)
        if (speed > 2) {
          for (let i = 0; i < 2; i++) {
            trailsRef.current.push({
              x: clientX,
              y: clientY,
              vx: vx * 0.12 + (Math.random() - 0.5) * 1.2,
              vy: vy * 0.12 + (Math.random() - 0.5) * 1.2 - 0.25,
              size: Math.random() * 22 + 10,
              opacity: Math.random() * 0.35 + 0.12,
              rotation: Math.random() * Math.PI * 2,
              rotSpeed: (Math.random() - 0.5) * 0.015
            })
          }
          lastSpawnRef.current = now
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <>
      {/* Video background layer */}
      <video
        key={isPortrait ? 'portrait' : 'landscape'}
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'fill',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <source src={isPortrait ? '/smoke-video-portrait-pingpong.mp4' : '/smoke-video-pingpong.mp4'} type="video/mp4" />
      </video>

      {/* Canvas for interactive smoke trails */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
