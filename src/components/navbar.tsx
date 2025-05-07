"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/ui/motion";
import LanguageSwitcher from "@/components/common/language-switcher";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Simple translation function
  const t = (key: string) => {
    // Extract locale from pathname
    const locale = pathname.startsWith("/ar") ? "ar" : "en";

    // Simple translations for navigation items
    const translations: Record<string, Record<string, string>> = {
      en: {
        "navigation.home": "Home",
        "navigation.about": "About",
        "navigation.works": "Works",
        "navigation.contact": "Contact",
      },
      ar: {
        "navigation.home": "الرئيسية",
        "navigation.about": "عني",
        "navigation.works": "أعمالي",
        "navigation.contact": "تواصل",
      },
    };

    return translations[locale]?.[key] || key;
  };

  // Navigation links data
  const navLinks = [
    { href: "/", label: t("navigation.home") },
    { href: "/about", label: t("navigation.about") },
    { href: "/works", label: t("navigation.works") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  // Function to check if the current path matches the nav item
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/ar";
    }
    return pathname.includes(path);
  };

  return (
    <FadeIn duration={0.6} direction="down">
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-[#d1d1c7]/50">
        <nav>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo/Brand */}
              <div className="flex-shrink-0">
                <Link href="/" className="font-medium text-lg">
                  <HoverScale scale={1.02}>MA</HoverScale>
                </Link>
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                >
                  {navLinks.map((link) => (
                    <StaggerItem key={link.href}>
                      <Link 
                        href={link.href}
                        className={`nav-link text-sm transition-all py-1 ${
                          isActive(link.href) 
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </StaggerItem>
                  ))}
                  <StaggerItem>
                    <LanguageSwitcher variant="desktop" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="mr-2">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="flex flex-col p-6">
                    <div className="flex items-center justify-between mb-8">
                      <Link href="/" className="font-medium text-lg" onClick={() => setIsOpen(false)}>
                        MA
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <div className="flex flex-col space-y-4 mt-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg py-2 transition-colors ${
                            isActive(link.href)
                              ? "text-foreground font-medium"
                              : "text-muted-foreground"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-auto pt-8">
                      <LanguageSwitcher variant="mobile" />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
}
