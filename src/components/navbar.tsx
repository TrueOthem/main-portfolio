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

  return (
    <FadeIn duration={0.6} direction="down" data-oid="paiz4a2">
      <header data-oid="xypm02s">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid="9j5ye72"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="nhkm6-q"
          >
            <div
              className="flex h-16 justify-between items-center"
              data-oid="_z:9hga"
            >
              <div className="flex items-center" data-oid="wq8ndhg"></div>

              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center space-x-6"
                data-oid="0z:-.v."
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                  data-oid="1e_av:w"
                >
                  <StaggerItem data-oid="4wh6jmq">
                    <Link
                      href="/"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="j1dlyy:"
                    >
                      <motion.span
                        className={pathname === "/" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="f9739p7"
                      >
                        Home
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="_82e:_3">
                    <Link
                      href="/about"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="ybx2tul"
                    >
                      <motion.span
                        className={pathname === "/about" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="xjn2w6h"
                      >
                        About
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="b36-.o3">
                    <Link
                      href="/works"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid=".d:jcn6"
                    >
                      <motion.span
                        className={pathname === "/works" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="6-a0loz"
                      >
                        Works
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="6:md4y2">
                    <Link
                      href="/blog"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="wseo455"
                    >
                      <motion.span
                        className={pathname === "/blog" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="ipa2xn4"
                      >
                        Blog
                      </motion.span>
                    </Link>
                  </StaggerItem>

                  <StaggerItem data-oid="qr-t-ez">
                    <LanguageSwitcher variant="desktop" data-oid="tphov9a" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile navigation */}
              <div
                className="flex md:hidden items-center space-x-2"
                data-oid="lm809lx"
              >
                <Sheet data-oid="yyc5hdg">
                  <SheetTrigger asChild data-oid="93r.3eh">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menu"
                      data-oid=".uxzmg2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="5bq1v5x"
                      >
                        <Menu data-testid="menu-icon" data-oid=":u3kcdr" />
                      </motion.div>
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    onCloseAutoFocus={() => {
                      // This ensures the mobile menu closes properly
                      const mobileLinks = document.querySelectorAll(
                        '[data-nav-type="mobile"]',
                      );
                      mobileLinks.forEach((link) => {
                        if (link instanceof HTMLElement) {
                          link.style.display = "none";
                          // Reset display after animation completes
                          setTimeout(() => {
                            if (link instanceof HTMLElement) {
                              link.style.display = "";
                            }
                          }, 500);
                        }
                      });
                    }}
                    data-oid="d.gtbui"
                  >
                    <StaggerContainer
                      className="flex flex-col space-y-6 mt-10"
                      delay={0.2}
                      data-oid=":5p15ur"
                    >
                      <StaggerItem direction="down" data-oid="p1r1y:5">
                        <Link
                          href="/"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="c5l24tk"
                        >
                          <motion.span
                            className={pathname === "/" ? "text-primary" : ""}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="pjybv52"
                          >
                            Home
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="o..kw41">
                        <Link
                          href="/about"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="3l5tbvs"
                        >
                          <motion.span
                            className={
                              pathname === "/about" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="64kqg1u"
                          >
                            About
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="flq8q.g">
                        <Link
                          href="/works"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="wey5u:j"
                        >
                          <motion.span
                            className={
                              pathname === "/works" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="5:3pvkv"
                          >
                            Works
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="cl:atj7">
                        <Link
                          href="/blog"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="8b0-1to"
                        >
                          <motion.span
                            className={
                              pathname === "/blog" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid=":ma1-97"
                          >
                            Blog
                          </motion.span>
                        </Link>
                      </StaggerItem>

                      <StaggerItem direction="down" data-oid="zy247t2">
                        <LanguageSwitcher variant="mobile" data-oid="4r7whcu" />
                      </StaggerItem>
                    </StaggerContainer>
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
