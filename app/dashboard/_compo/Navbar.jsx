"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import {
    Menu, X,
} from 'lucide-react';

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs';
import { Button } from '../../../components/ui/button';
const Navbar = () => {
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "AI Interview", href: "/interview" },
        { label: "Study", href: "/study" },
    ];
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        {/* <img className="h-10 w-10 mr-2" src={codeImg} alt="Logo" /> */}
                        <span className="text-xl tracking-tight">SkillSync</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <SignedOut>
                        <Button><SignInButton /></Button>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <SignedOut>
                            <Button><SignInButton /></Button>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                )}
            </div>
        </nav>

    )
}

export default Navbar
