const techs = [
    { icon: "⚛️", name: "React" },
    { icon: "▲", name: "Next.js" },
    { icon: "🟦", name: "TypeScript" },
    { icon: "🟢", name: "Node.js" },
    { icon: "🚂", name: "Express" },
    { icon: "🐘", name: "PostgreSQL" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "🐍", name: "Python" },
    { icon: "🎨", name: "Tailwind" },
    { icon: "🐋", name: "Docker" },
    { icon: "⚙️", name: "GitHub Actions" },
    { icon: "☁️", name: "AWS" },
    { icon: "🐙", name: "Git" },
    { icon: "🐧", name: "Linux" },
]

const Pill = ({ icon, name }: { icon: string; name: string }) => (
    <div className="flex items-center gap-1.5 bg-[#1A1A1A]/10 dark:bg-white/10 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full px-2.5 py-1 shrink-0 transition-colors duration-500">
        <span className="text-sm">{icon}</span>
        <span className="text-xs font-medium whitespace-nowrap text-[#1A1A1A] dark:text-[#E8E4D9]">{name}</span>
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
        @keyframes ticker-x-reverse {
          from { transform: translateX(0); }
          to { transform: translateX(50%); }
        }
        .animate-ticker-x {
          animation: ticker-x 18s linear infinite, ticker-x-reverse 27s linear infinite paused;
          animation-composition: add;
          will-change: transform;
        }
        .animate-ticker-x:hover {
          animation-play-state: running, running;
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