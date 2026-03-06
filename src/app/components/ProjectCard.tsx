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
}

export default function ProjectCard({ id, proj_img, proj_name, description, project_link }: ProjectProps) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="border border-[#1A1A1A]/15 rounded-2xl bg-[#C8BFA8] w-full overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
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
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#C8BFA8] to-transparent" />
            </div>

            {/* Desktop — hover reveal image */}
            <div className={`relative w-full hidden lg:block transition-all duration-300 ease-in-out ${hovered ? "h-36" : "h-0"}`}>
                <Image
                    src={proj_img}
                    alt={proj_name}
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#C8BFA8] to-transparent" />
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
                    <div className="flex items-start justify-between gap-2">
                        <span className="font-playfair font-bold text-sm xl:text-base leading-tight">{proj_name}</span>
                        <Link href={project_link} target="_blank" className="text-[#1A1A1A]/40 hover:text-[#1A1A1A] transition-colors shrink-0 text-xs">↗</Link>
                    </div>
                    <p className={`text-xs text-[#1A1A1A]/60 leading-relaxed transition-all duration-300 ${hovered ? "lg:line-clamp-none" : "lg:line-clamp-2"}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}