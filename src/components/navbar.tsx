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
    <FadeIn duration={0.6} direction="down" data-oid="kcu5lo.">
      <header data-oid="t.un6ju">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid="dmyngy3"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="m8h6:10"
          >
            <div
              className="flex h-16 justify-between items-center"
              data-oid="mhk33_1"
            >
              <div className="flex items-center" data-oid="662bvq-"></div>

              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center space-x-6"
                data-oid="4-nfypj"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                  data-oid="q0u_za6"
                >
                  <StaggerItem data-oid="t79j11g">
                    <Link
                      href="/"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid=".o6_6_7"
                    >
                      <motion.span
                        className={pathname === "/" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="z7ntdun"
                      >
                        Home
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="03yq26m">
                    <Link
                      href="/about"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid=":8mb0tl"
                    >
                      <motion.span
                        className={pathname === "/about" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="dy:13ir"
                      >
                        About
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="usf9io2">
                    <Link
                      href="/works"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="6o8d7r_"
                    >
                      <motion.span
                        className={pathname === "/works" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="jhmx0gt"
                      >
                        Works
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="d:gak_m">
                    <Link
                      href="/blog"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="gn73tq3"
                    >
                      <motion.span
                        className={pathname === "/blog" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="yjtmjj8"
                      >
                        Blog
                      </motion.span>
                    </Link>
                  </StaggerItem>

                  <StaggerItem data-oid="ovp0wpm">
                    <LanguageSwitcher variant="desktop" data-oid="jy6d9uw" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile navigation */}
              <div
                className="flex md:hidden items-center space-x-2"
                data-oid="jwm55m8"
              >
                <Sheet data-oid="4ew3gzn">
                  <SheetTrigger asChild data-oid="b5nss5-">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menu"
                      data-oid="_zyeb0k"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="csb.ew2"
                      >
                        <Menu data-testid="menu-icon" data-oid="e:373.5" />
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
                    data-oid="1zo98hc"
                  >
                    <StaggerContainer
                      className="flex flex-col space-y-6 mt-10"
                      delay={0.2}
                      data-oid="yfkpu7t"
                    >
                      <StaggerItem direction="down" data-oid="qns_b-x">
                        <Link
                          href="/"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="ybw:.vw"
                        >
                          <motion.span
                            className={pathname === "/" ? "text-primary" : ""}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="snome3w"
                          >
                            Home
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="h_war3:">
                        <Link
                          href="/about"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="4bawzz2"
                        >
                          <motion.span
                            className={
                              pathname === "/about" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="xwqvzgo"
                          >
                            About
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="1792px3">
                        <Link
                          href="/works"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="sw:3av8"
                        >
                          <motion.span
                            className={
                              pathname === "/works" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="htdrrzl"
                          >
                            Works
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="-jcxya0">
                        <Link
                          href="/blog"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="5lkqv-s"
                        >
                          <motion.span
                            className={
                              pathname === "/blog" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="675xp__"
                          >
                            Blog
                          </motion.span>
                        </Link>
                      </StaggerItem>

                      <StaggerItem direction="down" data-oid=":w.o:rw">
                        <LanguageSwitcher variant="mobile" data-oid="mbwuigr" />
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
