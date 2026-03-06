const techs = [
    { icon: "⚛️", name: "React" },
    { icon: "▲", name: "Next.js" },
    { icon: "🟦", name: "TypeScript" },
    { icon: "🐍", name: "Python" },
    { icon: "🎨", name: "Tailwind" },
    { icon: "🐋", name: "Docker" },
    { icon: "☁️", name: "AWS" },
    { icon: "🐙", name: "Git" },
    { icon: "🐧", name: "Linux" },
]

const Pill = ({ icon, name }: { icon: string; name: string }) => (
    <div className="flex items-center gap-2 bg-[#1A1A1A]/10 border border-[#1A1A1A]/10 rounded-full px-3 py-1.5 shrink-0">
        <span className="text-sm">{icon}</span>
        <span className="text-xs font-medium whitespace-nowrap">{name}</span>
    </div>
)
export default function TechTicker() {
    return (
        <>
            <style>{`
        @keyframes ticker-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-ticker-x {
          animation: ticker-x 18s linear infinite;
          will-change: transform;
        }
      `}</style>

            <div className="overflow-hidden w-full">
                <div className="flex gap-2 animate-ticker-x w-max">
                    {[...techs, ...techs, ...techs, ...techs].map((t, i) => (
                        <Pill key={i} {...t} />
                    ))}
                </div>
            </div>
        </>
    )
}