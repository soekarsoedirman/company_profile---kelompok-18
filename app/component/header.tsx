"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <span className="logo-text">18DEV</span>
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <Link href="/">Home</Link>
                    <Link href="/service">Service</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    )
}