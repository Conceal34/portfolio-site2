"use client"

import { StaticImageData } from "next/image";
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";

interface ProjectProps {
    id: number | string;
    proj_img: string | StaticImageData;
    proj_name: string;
    description: string;
    project_link: string;
    live_link?: string;
    live_link_text?: string;
}

export default function ProjectCard({ id, proj_img, proj_name, description, project_link, live_link, live_link_text }: ProjectProps) {
    const [hovered, setHovered] = useState(false);

    const handleLiveClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(live_link, "_blank", "noopener,noreferrer");
    };

    return (
        <Link
            href={project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#1A1A1A]/15 dark:border-white/10 rounded-2xl bg-[#EAE4D3] hover:bg-[#DFD6C1] dark:bg-[#2A2A28] dark:hover:bg-[#333330] w-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer block hover:shadow-sm"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Mobile — always visible stacked image */}
            <div className="relative w-full h-36 lg:hidden">
                <Image
                    src={proj_img}
                    alt={proj_name}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#EAE4D3] group-hover:from-[#DFD6C1] dark:from-[#2A2A28] dark:group-hover:from-[#333330] transition-colors duration-300 to-transparent" />
            </div>

            {/* Desktop — hover reveal image */}
            <div className={`relative w-full hidden lg:block transition-all duration-300 ease-in-out ${hovered ? "h-36" : "h-0"}`}>
                <Image
                    src={proj_img}
                    alt={proj_name}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#EAE4D3] group-hover:from-[#DFD6C1] dark:from-[#2A2A28] dark:group-hover:from-[#333330] transition-colors duration-300 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex gap-3 p-3 items-start">
                {/* Thumbnail — desktop only */}
                <div className={`relative rounded-xl overflow-hidden shrink-0 hidden lg:block transition-all duration-300 ${hovered ? "w-0 h-0 opacity-0" : "w-14 h-14 xl:w-16 xl:h-16 opacity-100"}`}>
                    <Image
                        src={proj_img}
                        alt={proj_name}
                        fill
                        className="object-cover object-top"
                    />
                </div>

                <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <span className="font-playfair font-bold text-sm xl:text-base leading-tight text-[#1A1A1A] dark:text-[#E8E4D9]">{proj_name}</span>
                    <p className={`text-xs text-[#1A1A1A]/70 dark:text-[#E8E4D9]/70 leading-relaxed transition-all duration-300 ${hovered ? "lg:line-clamp-none" : "lg:line-clamp-2"}`}>
                        {description}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-2">
                        {live_link && (
                            <button
                                onClick={handleLiveClick}
                                className="text-[9px] xl:text-[10px] font-sans tracking-wider uppercase px-3 py-1 bg-[#1A1A1A] text-[#D3CAB3] rounded-full hover:bg-[#3a3a30] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
                            >
                                {live_link_text || "Live Demo ↗"}
                            </button>
                        )}
                        <span className="text-[#1A1A1A]/40 dark:text-white/40 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors text-[9px] xl:text-[10px] font-sans tracking-wider uppercase ml-auto">
                            Code ↗
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}