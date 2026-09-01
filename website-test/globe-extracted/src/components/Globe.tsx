import { useEffect, useRef, useState, useCallback } from "react"
import { geoOrthographic, geoPath, geoGraticule, geoDistance } from "d3-geo"
import { feature, mesh } from "topojson-client"

const MENA_IDS = new Set([
  12,  // Algeria
  434, // Libya
  788, // Tunisia
  504, // Morocco
  818, // Egypt
  729, // Sudan
  760, // Syria
  422, // Lebanon
  368, // Iraq
  400, // Jordan
  682, // Saudi Arabia
  784, // UAE
  414, // Kuwait
  634, // Qatar
  48,  // Bahrain
  512, // Oman
  887, // Yemen
  376, // Israel
  275, // Palestine
])

const OFFICES = [
  {
    id: "jordan",
    name: "Jordan (HQ)",
    label: "Primary Manufacturing & Offices",
    lat: 31.95,
    lon: 35.93,
  },
  {
    id: "algeria",
    name: "Algeria Office",
    label: "Regional Production Facility",
    lat: 36.75,
    lon: 3.06,
  },
]

const MARKETS = [
  { name: "Saudi Arabia", lat: 23.89, lon: 45.08 },
  { name: "Egypt", lat: 26.82, lon: 30.8 },
  { name: "Lebanon", lat: 33.89, lon: 35.5 },
  { name: "Iraq", lat: 33.22, lon: 43.68 },
  { name: "UAE", lat: 24.47, lon: 54.37 },
  { name: "Libya", lat: 26.34, lon: 17.23 },
  { name: "Morocco", lat: 31.79, lon: -7.09 },
  { name: "Tunisia", lat: 33.89, lon: 9.54 },
  { name: "Sudan", lat: 12.86, lon: 30.22 },
  { name: "Syria", lat: 34.8, lon: 38.99 },
  { name: "Kuwait", lat: 29.31, lon: 47.48 },
  { name: "Qatar", lat: 25.35, lon: 51.18 },
]

interface Tooltip {
  x: number
  y: number
  name: string
  label: string
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ width: 500, height: 500 })
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const rotationRef = useRef<[number, number, number]>([-28, -22, 0])
  const dragRef = useRef<{
    x: number
    y: number
    startRot: [number, number, number]
  } | null>(null)
  const autoRotateRef = useRef(true)
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const worldDataRef = useRef<{ countries: any; borders: any } | null>(null)
  const projRef = useRef<ReturnType<typeof geoOrthographic> | null>(null)
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((r) => r.json())
      .then((world: any) => {
        const countries = feature(world, world.objects.countries as any)
        const borders = mesh(
          world,
          world.objects.countries as any,
          (a: any, b: any) => a !== b
        )
        worldDataRef.current = { countries, borders }
      })
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      if (width > 0 && height > 0) setSize({ width, height })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = size.width * dpr
    canvas.height = size.height * dpr

    const ctx = canvas.getContext("2d")!
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const radius = Math.min(size.width, size.height) * 0.42
    const cx = size.width / 2
    const cy = size.height / 2

    const proj = geoOrthographic()
      .scale(radius)
      .translate([cx, cy])
      .clipAngle(90)
    projRef.current = proj

    const graticule = geoGraticule()()

    const render = (ts: number) => {
      if (autoRotateRef.current && !dragRef.current) {
        rotationRef.current[0] -= 0.1
      }

      proj.rotate(rotationRef.current)
      const pathGen = geoPath(proj, ctx)

      ctx.clearRect(0, 0, size.width, size.height)

      // Drop shadow
      ctx.save()
      ctx.shadowColor = "rgba(13, 33, 55, 0.18)"
      ctx.shadowBlur = 40
      ctx.shadowOffsetX = 10
      ctx.shadowOffsetY = 16
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fillStyle = "#FFFFFF"
      ctx.fill()
      ctx.restore()

      // White ocean
      ctx.beginPath()
      pathGen({ type: "Sphere" } as any)
      ctx.fillStyle = "#FFFFFF"
      ctx.fill()

      const data = worldDataRef.current
      if (data) {
        const feats = (data.countries as any).features as any[]

        // Gray continents (non-MENA)
        feats.forEach((f) => {
          if (!MENA_IDS.has(+f.id)) {
            ctx.beginPath()
            pathGen(f)
            ctx.fillStyle = "#E2E8F0"
            ctx.fill()
          }
        })

        // MENA base color
        feats.forEach((f) => {
          if (MENA_IDS.has(+f.id)) {
            ctx.beginPath()
            pathGen(f)
            ctx.fillStyle = "#E2E8F0"
            ctx.fill()
          }
        })

        // MENA teal overlay at 30% opacity
        feats.forEach((f) => {
          if (MENA_IDS.has(+f.id)) {
            ctx.beginPath()
            pathGen(f)
            ctx.fillStyle = "rgba(0, 153, 122, 0.30)"
            ctx.fill()
          }
        })

        // Graticule
        ctx.beginPath()
        pathGen(graticule)
        ctx.strokeStyle = "rgba(203, 213, 225, 0.38)"
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Internal country borders
        ctx.beginPath()
        pathGen(data.borders as any)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.88)"
        ctx.lineWidth = 0.7
        ctx.stroke()
      }

      // Sphere edge
      ctx.beginPath()
      pathGen({ type: "Sphere" } as any)
      ctx.strokeStyle = "rgba(203, 213, 225, 0.65)"
      ctx.lineWidth = 1
      ctx.stroke()

      // Visibility
      const r = rotationRef.current
      const front: [number, number] = [-r[0], -r[1]]

      // Market presence dots
      MARKETS.forEach((m) => {
        if (geoDistance([m.lon, m.lat], front) < Math.PI / 2 - 0.08) {
          const pt = proj([m.lon, m.lat])
          if (!pt) return
          ctx.beginPath()
          ctx.arc(pt[0], pt[1], 3.5, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(0, 153, 122, 0.8)"
          ctx.fill()
        }
      })

      // Office pins with pulse animation
      OFFICES.forEach((o) => {
        if (geoDistance([o.lon, o.lat], front) < Math.PI / 2 - 0.08) {
          const pt = proj([o.lon, o.lat])
          if (!pt) return
          const [px, py] = pt
          const pulse = (Math.sin(ts / 900) + 1) / 2

          // Outer pulse ring
          ctx.beginPath()
          ctx.arc(px, py, 11 + pulse * 8, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(0, 153, 122, ${0.28 - pulse * 0.2})`
          ctx.lineWidth = 1.5
          ctx.stroke()

          // Static inner ring
          ctx.beginPath()
          ctx.arc(px, py, 11, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(0, 153, 122, 0.32)"
          ctx.lineWidth = 1
          ctx.stroke()

          // Pin body
          ctx.beginPath()
          ctx.arc(px, py, 7, 0, Math.PI * 2)
          ctx.fillStyle = "#00997A"
          ctx.fill()
          ctx.strokeStyle = "#FFFFFF"
          ctx.lineWidth = 2
          ctx.stroke()

          // Center dot
          ctx.beginPath()
          ctx.arc(px, py, 2.5, 0, Math.PI * 2)
          ctx.fillStyle = "#FFFFFF"
          ctx.fill()
        }
      })

      // Subtle top-left sphere highlight
      const hlGrad = ctx.createRadialGradient(
        cx - radius * 0.38,
        cy - radius * 0.38,
        0,
        cx,
        cy,
        radius
      )
      hlGrad.addColorStop(0, "rgba(255,255,255,0.18)")
      hlGrad.addColorStop(0.55, "rgba(255,255,255,0.04)")
      hlGrad.addColorStop(1, "rgba(255,255,255,0)")
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fillStyle = hlGrad
      ctx.fill()

      animFrameRef.current = requestAnimationFrame(render)
    }

    animFrameRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [size])

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId)
      dragRef.current = {
        x: e.clientX,
        y: e.clientY,
        startRot: [...rotationRef.current] as [number, number, number],
      }
      autoRotateRef.current = false
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
      setIsDragging(true)
    },
    []
  )

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (dragRef.current) {
        const dx = e.clientX - dragRef.current.x
        const dy = e.clientY - dragRef.current.y
        rotationRef.current = [
          dragRef.current.startRot[0] + dx * 0.38,
          Math.max(
            -85,
            Math.min(85, dragRef.current.startRot[1] - dy * 0.38)
          ),
          dragRef.current.startRot[2],
        ]
        return
      }

      // Hover detection
      if (!projRef.current || !canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top

      const r = rotationRef.current
      const front: [number, number] = [-r[0], -r[1]]

      for (const o of OFFICES) {
        if (geoDistance([o.lon, o.lat], front) < Math.PI / 2 - 0.08) {
          const pt = projRef.current([o.lon, o.lat])
          if (!pt) continue
          if (Math.hypot(mx - pt[0], my - pt[1]) < 18) {
            setTooltip({ x: pt[0], y: pt[1], name: o.name, label: o.label })
            return
          }
        }
      }
      setTooltip(null)
    },
    []
  )

  const handlePointerUp = useCallback(() => {
    dragRef.current = null
    setIsDragging(false)
    resumeTimerRef.current = setTimeout(() => {
      autoRotateRef.current = true
    }, 2200)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full select-none">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />

      {tooltip && (
        <div
          className="absolute pointer-events-none z-10"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translate(-50%, calc(-100% - 14px))",
          }}
        >
          <div className="bg-[#0D2137] text-white rounded-xl shadow-2xl px-4 py-2.5 whitespace-nowrap">
            <div className="text-[13px] font-semibold leading-snug">
              {tooltip.name}
            </div>
            <div className="text-[11px] text-white/65 mt-0.5">{tooltip.label}</div>
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#0D2137]" />
        </div>
      )}
    </div>
  )
}
