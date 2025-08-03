"use client";

import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import './globals.css'
import Link from "next/link";


export function Header(){
    return (
    <div className=" border-b">
        <div className="h-16 container flex justify-between items-center">
            <div>ThumbnailRater</div> 

            <div>
                <SignedIn>
                    <Link href="/create">create page</Link>
                </SignedIn>
                <SignedOut>
                    <Link href="/about">About page</Link>
                    <Link href="/pricing">Pricing page</Link>
                </SignedOut>
            </div>

            <div className="flex gap-4 items-center">
                <SignedIn><UserButton /></SignedIn>
                <SignedOut><SignInButton/></SignedOut>
                <ModeToggle />
            </div>

        </div>

    </div>
);}
