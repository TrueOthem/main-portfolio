"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FadeIn } from "@/components/ui/motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  
  // Simple translation function
  const t = (key: string) => {
    // Extract locale from pathname
    const locale = pathname.startsWith("/ar") ? "ar" : "en";

    // Simple translations for footer
    const translations: Record<string, Record<string, string>> = {
      en: {
        "footer.rights": "All rights reserved",
        "footer.built": "Built with Next.js and Tailwind CSS",
        "navigation.home": "Home",
        "navigation.about": "About",
        "navigation.works": "Works",
        "navigation.contact": "Contact",
      },
      ar: {
        "footer.rights": "جميع الحقوق محفوظة",
        "footer.built": "بُني باستخدام Next.js و Tailwind CSS",
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

  // Social links data
  const socialLinks = [
    { 
      href: "https://github.com/", 
      label: "GitHub",
      icon: <Github className="h-5 w-5" />
    },
    { 
      href: "https://linkedin.com/", 
      label: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />
    },
    { 
      href: "https://twitter.com/", 
      label: "Twitter",
      icon: <Twitter className="h-5 w-5" />
    },
    { 
      href: "mailto:contact@example.com", 
      label: "Email",
      icon: <Mail className="h-5 w-5" />
    },
  ];

  return (
    <FadeIn direction="up" duration={0.6}>
      <footer className="border-t border-[#d1d1c7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-12">
            {/* Footer top section with navigation */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand/Logo */}
              <div>
                <Link href="/" className="text-xl font-medium">
                  Mohamed Adil
                </Link>
                <p className="mt-2 text-sm text-muted-foreground">
                  Process Development Engineer
                </p>
              </div>

              {/* Navigation */}
              <div className="mt-6 md:mt-0">
                <h3 className="text-sm font-medium">Navigation</h3>
                <ul className="mt-4 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div className="mt-6 md:mt-0">
                <h3 className="text-sm font-medium">Connect</h3>
                <ul className="mt-4 space-y-3">
                  {socialLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter (placeholder) */}
              <div className="mt-6 md:mt-0">
                <h3 className="text-sm font-medium">Updates</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Stay updated with my latest work and research in process development.
                </p>
                <div className="mt-4 flex max-w-md">
                  <a
                    href="/contact"
                    className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* Footer bottom section */}
            <div className="mt-12 flex flex-col items-center justify-between border-t border-[#d1d1c7] pt-8 md:flex-row">
              <p className="text-xs text-muted-foreground">
                &copy; {currentYear} Mohamed Adil Al Sabri. {t("footer.rights")}.
              </p>
              <p className="mt-4 text-xs text-muted-foreground md:mt-0">
                {t("footer.built")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
