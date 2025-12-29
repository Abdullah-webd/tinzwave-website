"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
    Rocket
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* CTA */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary to-primary">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <Reveal>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Rocket className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Africa?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of individuals and organizations building the
              future through technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-blue-900 text-white text-lg px-8 py-6 h-auto font-semibold "
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-blue-900 text-white text-lg px-8 py-6 h-auto font-semibold"
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

        {/* Divider between CTA and footer content */}
        <div className="border-t border-primary-foreground/20 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/logotinz.png"
                alt="Tinzwave logo"
                width={160}
                height={48}
                className="h-10 w-35 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">
              Empowering Africa with world-class technology solutions and
              digital skills training.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com/tinzwave"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/tinzwave"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/tinzwave"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/tinzwave"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tech Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/software-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mobile-development"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@tinzwave.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  infor@tinzwave.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+2349161052706"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +234 916 105 2706
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Tinzwave. All rights reserved. |
            Empowering Africa with Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
