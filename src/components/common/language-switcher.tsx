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
    <DropdownMenu data-oid="aye83k9">
      <DropdownMenuTrigger asChild data-oid="nkcnxmz">
        <Button
          variant="outline"
          size="sm"
          className="text-sm font-medium px-4 py-2 rounded-full border border-[#d1d1c7] hover:bg-[#f4f4f0]"
          data-testid="language-switcher"
          data-variant={variant}
          data-oid="ss2ispc"
        >
          <Globe className="h-4 w-4 mr-2" data-oid="pnreyk8" />
          <motion.span
            key={currentLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            data-oid="1qlli77"
          >
            {currentLabel}
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={variant === "desktop" ? "end" : "start"}
        data-oid="lgsjc77"
      >
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          data-oid="q_.vxqx"
        >
          <span
            className={currentLocale === "en" ? "font-bold" : ""}
            data-oid="ku3nn.z"
          >
            English
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("ar")}
          data-oid="3lmmyni"
        >
          <span
            className={currentLocale === "ar" ? "font-bold" : ""}
            data-oid="6-gg4ch"
          >
            العربية
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
