import { Children } from "react";

export default function ProjectLayout ({children,} : Readonly<{children: React.ReactNode}>) {
    return (
        <>
            <h2>Projects</h2>
            <div>
                {children}
            </div>
        </>
    )
} 