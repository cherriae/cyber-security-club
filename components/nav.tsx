"use client"

import React from "react";
import {Sidebar, SidebarLink, DesktopSidebar, MobileSidebar} from "@/components/aceternity/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

export function Navbar() {
    const pages = [
        {
            label: "Home",
            href: "/",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            label: "Team",
            href: "/team",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 016-6h0a6 6 0 016 6v1" />
                    <path d="M8 7a4 4 0 108 0" />
                </svg>
            )
        },
        {
            label: "Schedule",
            href: "/schedule",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )
        },
        {
            label: "Tournaments",
            href: "/tournaments",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            )
        },
        {
            label: "Resources",
            href: "/resources",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            label: "Past competition",
            href: "/past-competition",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
    ]

    const [open, setOpen] = React.useState(false);
    return (
        <>
            {/* Desktop Navigation */}
            <div className="hidden md:block h-screen flex-shrink-0 z-20">
                <Sidebar open={open} setOpen={setOpen} animate={true}>
                    <DesktopSidebar className="h-full rounded-2xl justify-between gap-10">
                        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                            <Link
                                href="/"
                                className="font-normal flex space-x-2 items-center text-sm text-white py-1 relative"
                            >
                                <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="font-medium text-white whitespace-pre text-xl py-10"
                                >
                                    Cyber Security Club
                                </motion.span>
                            </Link>
                            <div className="mt-[3rem] flex flex-col gap-8">
                                {pages.map((link, idx) => (
                                    <SidebarLink key={idx} link={link} className="gap-3"/>
                                ))}
                            </div>
                        </div>
                        <div>
                            <SidebarLink
                                link={{
                                    label: "Login/Signup",
                                    href: "/login",
                                    icon: (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    ),
                                }}
                            />
                        </div>
                    </DesktopSidebar>
                </Sidebar>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden z-20">
                <Sidebar open={open} setOpen={setOpen} animate={false}>
                    <MobileSidebar className="flex flex-col justify-between">
                        <div className="flex flex-col gap-8">
                            <Link href="/" className="flex items-center gap-3 mb-8">
                                <div className="h-5 w-6 bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
                                <span className="font-medium text-white">Cyber Security Club</span>
                            </Link>
                            {pages.map((link, idx) => (
                                <SidebarLink 
                                    key={idx} 
                                    link={link} 
                                    className="gap-3 text-white hover:text-green-500 transition-colors"
                                    onClick={() => setOpen(false)}
                                />
                            ))}
                        </div>
                        <div className="mt-auto pt-8">
                            <SidebarLink
                                link={{
                                    label: "Login/Signup",
                                    href: "/login",
                                    icon: (
                                        <Image
                                            src="/cyber-security-club/imgs/default_profile.png"
                                            className="h-7 w-7 flex-shrink-0 rounded-full"
                                            width={50}
                                            height={50}
                                            alt="Default Profile Picture"
                                        />
                                    ),
                                }}
                                onClick={() => setOpen(false)}
                            />
                        </div>
                    </MobileSidebar>
                </Sidebar>
            </div>
        </>
    )
}