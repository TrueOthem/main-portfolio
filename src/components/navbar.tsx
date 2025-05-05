"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/ui/motion";
import LanguageSwitcher from "@/components/common/language-switcher";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

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
      },
      ar: {
        "navigation.home": "الرئيسية",
        "navigation.about": "عني",
        "navigation.works": "أعمالي",
      },
    };

    return translations[locale]?.[key] || key;
  };

  return (
    <FadeIn duration={0.6} direction="down" data-oid="efj6dj8">
      <header data-oid="e9ys99v">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid="510:c1p"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="3ne.rz1"
          >
            <div
              className="flex h-16 items-center justify-end p-[20px]"
              data-oid="kns8er."
            >
              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center justify-center space-x-6"
                data-oid="lleri1c"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center justify-center space-x-6"
                  data-oid="_py0ez3"
                >
                  <StaggerItem data-oid="smg2vi_">
                    <LanguageSwitcher variant="desktop" data-oid="kqv6lto" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile language switcher */}
              <div
                className="flex md:hidden items-center justify-center"
                data-oid="fnq3g-u"
              >
                <LanguageSwitcher variant="mobile" data-oid="zy1n:8j" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
}
