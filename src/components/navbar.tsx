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
    <FadeIn duration={0.6} direction="down" data-oid="kd359b:">
      <header data-oid="m_ith7n">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid=":.3n18n"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="s6si89u"
          >
            <div
              className="flex h-16 items-center justify-end p-[20px]"
              data-oid="dh9qn4a"
            >
              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center justify-center space-x-6"
                data-oid="ph3_4fq"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center justify-center space-x-6"
                  data-oid=".whv8nr"
                >
                  <StaggerItem data-oid="_oz35pj">
                    <LanguageSwitcher variant="desktop" data-oid="lszwdhy" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile language switcher */}
              <div
                className="flex md:hidden items-center justify-center"
                data-oid="u-t2n1v"
              >
                <LanguageSwitcher variant="mobile" data-oid="2_v2k.-" />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </FadeIn>
  );
}
