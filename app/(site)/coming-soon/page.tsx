'use client'
import { useEffect, useState } from 'react'

function page() {
    return (
        <div className="relative w-full h-[calc(100vh-110px)] bg-[#090909] overflow-hidden flex items-center justify-center">

            {/* Center content */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-6xl sm:text-7xl md:text-7xl font-display font-semibold text-white tracking-tight">
                    Coming Soon...
                </h1>
            </div>
        </div>
    );
}

export default page