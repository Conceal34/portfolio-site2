"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import ContactDrawer from "./ContactDrawer";

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className="rounded-xl bg-[#D3CAB3] dark:bg-[#1C1C1A] text-[#1A1A1A] dark:text-[#E8E4D9] justify-between items-center flex px-6 py-4 lg:rounded-2xl transition-colors duration-500">
                <Link href={'/'} className="font-playfair font-bold text-xl lg:text-2xl hover:text-[#4C4B40] dark:hover:text-white transition-colors duration-300">
                    Vinner
                </Link>
                <div className="flex gap-4 lg:gap-6 items-center">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-full hover:bg-[#1A1A1A]/10 dark:hover:bg-white/10 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    )}
                    
                    <Link 
                        href="/project"
                        className="hidden sm:block font-sans text-xs font-semibold tracking-widest uppercase text-[#1A1A1A]/70 dark:text-[#E8E4D9]/70 hover:text-[#4C4B40] dark:hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        Projects
                    </Link>
                    
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="font-sans text-[10px] sm:text-xs tracking-widest uppercase bg-[#4C4B40] dark:bg-[#E8E4D9] text-[#E8E4D9] dark:text-[#1A1A1A] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-[#3a3a30] dark:hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 ease-out shadow-sm"
                    >
                        Let's Talk
                    </button>
                </div>
            </div>

            <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
        </>
    )
}