import Globe from "./components/Globe"

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#F1F5F9] flex flex-col items-center justify-center"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="w-full max-w-[580px] px-6">
        {/* Globe */}
        <div className="w-full aspect-square">
          <Globe />
        </div>

        {/* Legend */}
        <div className="mt-5 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#00997A]" />
              <div className="absolute w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-[13px] font-medium text-[#0D2137]">
              HQ / Office
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00997A] opacity-80" />
            <span className="text-[13px] text-[#0D2137]/60">
              Market Presence
            </span>
          </div>

          <div className="h-4 w-px bg-[#0D2137]/12" />

          <span className="text-[13px] font-bold text-[#00997A] tracking-wide">
            40+ Markets
          </span>
        </div>
      </div>
    </div>
  )
}
