"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      <AnimatePresence mode="wait">
        <div key={pathname} className="flex-1 flex flex-col gap-2 lg:min-h-0 lg:overflow-hidden h-full">
          {children}
        </div>
      </AnimatePresence>
    </NextThemesProvider>
  );
}
