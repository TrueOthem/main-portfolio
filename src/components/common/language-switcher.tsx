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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#d1d1c7] hover:bg-[#f4f4f0]"
          data-testid="language-switcher"
          data-variant={variant}
        >
          <Globe className="h-4 w-4 mr-2" />
          <motion.span
            key={currentLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {currentLabel}
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={variant === "desktop" ? "end" : "start"}>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          <span className={currentLocale === "en" ? "font-bold" : ""}>
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ar")}>
          <span className={currentLocale === "ar" ? "font-bold" : ""}>
            العربية
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
