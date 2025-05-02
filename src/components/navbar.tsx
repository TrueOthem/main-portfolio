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
    <FadeIn duration={0.6} direction="down" data-oid="4lsl5t-">
      <header data-oid="ppf:itt">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid="l0lfti9"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid=".94pcme"
          >
            <div
              className="flex h-16 justify-between items-center"
              data-oid="2ch8lhy"
            >
              <div className="flex items-center" data-oid="..n.trk"></div>

              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center space-x-6"
                data-oid="jji7bdc"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                  data-oid="seqkqef"
                >
                  <StaggerItem data-oid="746-zzg">
                    <Link
                      href="/"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="di0kwsr"
                    >
                      <motion.span
                        className={pathname === "/" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="kviw_zf"
                      >
                        Home
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="gfsicar">
                    <Link
                      href="/about"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="v66h7_z"
                    >
                      <motion.span
                        className={pathname === "/about" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="8k6rrzv"
                      >
                        About
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="qiig46f">
                    <Link
                      href="/works"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="b7ybx.x"
                    >
                      <motion.span
                        className={pathname === "/works" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="ibc7eo4"
                      >
                        Works
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="orgaq7g">
                    <Link
                      href="/blog"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="234ibtv"
                    >
                      <motion.span
                        className={pathname === "/blog" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="kh-nmh:"
                      >
                        Blog
                      </motion.span>
                    </Link>
                  </StaggerItem>

                  <StaggerItem data-oid="j-ahpdb">
                    <LanguageSwitcher variant="desktop" data-oid="3fwyvox" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile navigation */}
              <div
                className="flex md:hidden items-center space-x-2"
                data-oid="q7l6k2h"
              >
                <Sheet data-oid="f5a3pug">
                  <SheetTrigger asChild data-oid=".-noj.t">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menu"
                      data-oid="eqklatp"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="wjcy6q9"
                      >
                        <Menu data-testid="menu-icon" data-oid=":j9niul" />
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
                    data-oid="buoe4t6"
                  >
                    <StaggerContainer
                      className="flex flex-col space-y-6 mt-10"
                      delay={0.2}
                      data-oid="sb50ib4"
                    >
                      <StaggerItem direction="down" data-oid="b__u.80">
                        <Link
                          href="/"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="iax1f5g"
                        >
                          <motion.span
                            className={pathname === "/" ? "text-primary" : ""}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="qj466nl"
                          >
                            Home
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="_bdncge">
                        <Link
                          href="/about"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="3x.y9g3"
                        >
                          <motion.span
                            className={
                              pathname === "/about" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="29_7ywk"
                          >
                            About
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="zv2i8:2">
                        <Link
                          href="/works"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="jdl_pyh"
                        >
                          <motion.span
                            className={
                              pathname === "/works" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="649kjnf"
                          >
                            Works
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="t04nh3y">
                        <Link
                          href="/blog"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="3d78vk_"
                        >
                          <motion.span
                            className={
                              pathname === "/blog" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="qmv7efk"
                          >
                            Blog
                          </motion.span>
                        </Link>
                      </StaggerItem>

                      <StaggerItem direction="down" data-oid="sgu9511">
                        <LanguageSwitcher variant="mobile" data-oid="eodxpot" />
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
