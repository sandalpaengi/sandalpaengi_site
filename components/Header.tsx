"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-4 md:p-6 mix-blend-difference text-white pointer-events-none">
            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter pointer-events-auto">
                Sandalpaengi
            </Link>

            {/* Navigation */}
            <nav className="flex flex-col items-end space-y-1 pointer-events-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "text-sm md:text-base font-medium hover:underline underline-offset-4 decoration-1",
                            pathname === item.href ? "underline" : ""
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
