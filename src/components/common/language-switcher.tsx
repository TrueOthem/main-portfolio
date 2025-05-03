"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { localeConfig } from "../../../navigation";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Extract locale from pathname
  const currentLocale = pathname.startsWith("/ar") ? "ar" : "en";

  // Get the current display label from the locale config
  const currentLabel =
    localeConfig[currentLocale as keyof typeof localeConfig]?.label || "EN";

  const switchLanguage = (locale: string) => {
    // Get the path without the locale prefix
    let newPath = pathname;
    if (pathname.startsWith("/ar/") || pathname.startsWith("/en/")) {
      newPath = pathname.substring(3); // Remove the locale prefix and slash
    } else if (pathname === "/ar" || pathname === "/en") {
      newPath = "/"; // Root path
    }

    // Navigate to the new locale
    router.push(`/${locale}${newPath === "/" ? "" : newPath}`);
  };

  return (
    <DropdownMenu data-oid="1m.:p05">
      <DropdownMenuTrigger asChild data-oid="f_56.x5">
        <Button
          variant="outline"
          size="sm"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#d1d1c7] hover:bg-[#f4f4f0]"
          data-testid="language-switcher"
          data-variant={variant}
          data-oid="pqztyye"
        >
          <Globe className="h-4 w-4 mr-2" data-oid="x-6beeh" />
          <motion.span
            key={currentLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            data-oid="h7q_zmm"
          >
            {currentLabel}
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={variant === "desktop" ? "end" : "start"}
        data-oid="cogrppy"
      >
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          data-oid="s6t0r7-"
        >
          <span
            className={currentLocale === "en" ? "font-bold" : ""}
            data-oid="1c7p0jh"
          >
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("ar")}
          data-oid=".sx587c"
        >
          <span
            className={currentLocale === "ar" ? "font-bold" : ""}
            data-oid="g4ks1e_"
          >
            العربية
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
