"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/courses", label: "Tech Academy" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
       <div className="flex h-24 items-center justify-between">
  <Link href="/" className="flex items-center space-x-3 group">
    <Image
      src="/tinzwave-icon.png"
      alt="Tinzwave Logo"
      width={50}
      height={50}
      className="h-12 w-12 group-hover:scale-110 transition-transform duration-300"
    />
    <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent 
                   bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700
                   group-hover:scale-105 transition-transform duration-300">
      Tinzwave
    </h1>
  </Link>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-8">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className="text-sm font-medium text-foreground/70 transition-all hover:text-foreground relative group"
      >
        {link.label}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
      </Link>
    ))}
    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 transition-colors ml-4">
      <Link href="/courses">Enroll Now</Link>
    </Button>
  </div>

  {/* Mobile Menu Button */}
  <button
    className="md:hidden"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    aria-label="Toggle menu"
  >
    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
  </button>
</div>


        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="sm"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/courses">Enroll Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
