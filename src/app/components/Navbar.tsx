"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import ContactDrawer from "./ContactDrawer";

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isHome = pathname === "/";

    return (
        <>
            <div className={`bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] justify-between items-center flex rounded-xl lg:rounded-2xl transition-all duration-500 ${isHome ? 'px-6 py-4' : 'px-4 py-2.5 lg:px-5 lg:py-3'}`}>
                <Link href={'/'} className={`font-playfair font-bold hover:text-[#4C4B40] dark:hover:text-white transition-all duration-300 ${isHome ? 'text-xl lg:text-2xl' : 'text-lg lg:text-xl'}`}>
                    Vinner
                </Link>
                <div className="flex gap-4 lg:gap-6 items-center">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className={`rounded-full hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 transition-all duration-300 ${isHome ? 'p-2' : 'p-1.5'}`}
                            aria-label="Toggle Dark Mode"
                        >
                            {resolvedTheme === 'dark' ? <Sun size={isHome ? 18 : 16} /> : <Moon size={isHome ? 18 : 16} />}
                        </button>
                    )}
                    
                    <Link 
                        href="/project"
                        className={`hidden sm:block font-sans font-semibold tracking-widest uppercase text-[#1A1A1A]/70 dark:text-[#E8E4D9]/70 hover:text-[#4C4B40] dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ${isHome ? 'text-xs' : 'text-[10px]'}`}
                    >
                        Projects
                    </Link>
                    
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className={`font-sans tracking-widest uppercase bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] rounded-full hover:bg-[#3a3a30] dark:hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-sm ${
                            isHome ? 'px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs' : 'px-3 sm:px-4 py-1.5 sm:py-2 text-[9px] sm:text-[10px]'
                        }`}
                    >
                        Let's Talk
                    </button>
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    )
}