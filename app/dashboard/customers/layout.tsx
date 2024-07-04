import React from "react";

export default function CustomLayout({children}: {children: React.ReactNode}) {
    return <div className="flex h-20 shrink-0 rounded-lg bg-red-500 p-4">

        {children}
    </div>
}