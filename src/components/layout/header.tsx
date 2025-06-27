"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "../ui/button";

export function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Profolio</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
