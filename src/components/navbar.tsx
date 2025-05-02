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
    <FadeIn duration={0.6} direction="down" data-oid="ok2pnwe">
      <header data-oid="i91xyz9">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid="v78xgv1"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="-o.i4en"
          >
            <div
              className="flex h-16 justify-between items-center"
              data-oid="zkpljme"
            >
              <div className="flex items-center" data-oid="9a:c1.k"></div>

              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center space-x-6"
                data-oid="k0g.b6z"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                  data-oid="hwy71tv"
                >
                  <StaggerItem data-oid="7_wzn7d">
                    <Link
                      href="/"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="4fnyt2r"
                    >
                      <motion.span
                        className={pathname === "/" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="fhcimv3"
                      >
                        Home
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="idstdd8">
                    <Link
                      href="/about"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="ktuqzyi"
                    >
                      <motion.span
                        className={pathname === "/about" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="kc2vvx2"
                      >
                        About
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="og8e.3c">
                    <Link
                      href="/works"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="fu:-7ne"
                    >
                      <motion.span
                        className={pathname === "/works" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="abb7g.p"
                      >
                        Works
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="oq_vta4">
                    <Link
                      href="/blog"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid=":2owy_a"
                    >
                      <motion.span
                        className={pathname === "/blog" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="qm9vd9-"
                      >
                        Blog
                      </motion.span>
                    </Link>
                  </StaggerItem>

                  <StaggerItem data-oid="6yi3-nn">
                    <LanguageSwitcher variant="desktop" data-oid="8.3cvdh" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile navigation */}
              <div
                className="flex md:hidden items-center space-x-2"
                data-oid="badsqg5"
              >
                <Sheet data-oid="6b2xmo:">
                  <SheetTrigger asChild data-oid="6.p1hfz">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menu"
                      data-oid="bmd189n"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="kyq31_m"
                      >
                        <Menu data-testid="menu-icon" data-oid="5u5t5v7" />
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
                    data-oid="3sj08oo"
                  >
                    <StaggerContainer
                      className="flex flex-col space-y-6 mt-10"
                      delay={0.2}
                      data-oid="abpl_l6"
                    >
                      <StaggerItem direction="down" data-oid="ht1ovq-">
                        <Link
                          href="/"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="wti4wqo"
                        >
                          <motion.span
                            className={pathname === "/" ? "text-primary" : ""}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="98muham"
                          >
                            Home
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid=".us5f.h">
                        <Link
                          href="/about"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="hdpk3xr"
                        >
                          <motion.span
                            className={
                              pathname === "/about" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="0tvddv2"
                          >
                            About
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="7:x6o.9">
                        <Link
                          href="/works"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="oru-b_o"
                        >
                          <motion.span
                            className={
                              pathname === "/works" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="owbteth"
                          >
                            Works
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="7qb70m.">
                        <Link
                          href="/blog"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="conaw0i"
                        >
                          <motion.span
                            className={
                              pathname === "/blog" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="l1cvj_h"
                          >
                            Blog
                          </motion.span>
                        </Link>
                      </StaggerItem>

                      <StaggerItem direction="down" data-oid="_4f0_ax">
                        <LanguageSwitcher variant="mobile" data-oid="qh2x22y" />
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
