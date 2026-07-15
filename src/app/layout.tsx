import "./globals.css";
import Navbar from "./components/Navbar"
import { ClientProviders } from "./components/ClientProviders";
import type { Metadata } from "next";

import { Playfair_Display, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "Vinner Hooda — Full-Stack Developer",
  description: "Portfolio of Vinner Hooda, a full-stack developer building with React, Next.js, Node.js, and PostgreSQL, and researching satellite-based disaster detection.",
  verification: {
    google: "UG97Fbz_QLA2tA_1JzIR2kaYWoRl_EWrWVZHlhhFjYA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className={`${playfair.variable} ${dmSans.variable} antialiased p-2 lg:p-3 xl:p-4 2xl:p-6 flex flex-col gap-2 lg:overflow-hidden lg:h-screen bg-[#F4F0E6] dark:bg-[#080808] transition-colors duration-500`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Vinner Hooda",
              "jobTitle": "Full-Stack Developer",
              "url": "https://vinner.dev",
              "sameAs": [
                "https://www.linkedin.com/in/vinnerhooda/",
                "https://github.com/Conceal34",
                "https://x.com/vinnerhooda"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Christ University",
                "department": {
                  "@type": "Organization",
                  "name": "MCA"
                }
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "MongoDB",
                "Docker",
                "AWS",
                "GitHub Actions",
                "Linux"
              ]
            })
          }}
        />
        <ClientProviders>
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
