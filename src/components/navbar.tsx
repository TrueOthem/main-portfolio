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
    <FadeIn duration={0.6} direction="down" data-oid="ag5f_qw">
      <header data-oid="7zewca.">
        <nav
          className="border-b-0 border-[#d1d1c7] bg-background"
          data-oid=".l_4mlf"
        >
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            data-oid="j.q-rhg"
          >
            <div
              className="flex h-16 justify-between items-center"
              data-oid="qy2:bmw"
            >
              <div className="flex items-center" data-oid=".mcpvv8"></div>

              {/* Desktop navigation */}
              <div
                className="hidden md:flex items-center space-x-6"
                data-oid="_g.zq00"
              >
                <StaggerContainer
                  staggerChildren={0.05}
                  className="flex items-center space-x-6"
                  data-oid="cd:p2i_"
                >
                  <StaggerItem data-oid="ay_t1b_">
                    <Link
                      href="/"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="r40wgnr"
                    >
                      <motion.span
                        className={pathname === "/" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="ug_f7j1"
                      >
                        Home
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="5zodgs9">
                    <Link
                      href="/about"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="5-:_nlv"
                    >
                      <motion.span
                        className={pathname === "/about" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="bvr2wnx"
                      >
                        About
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="l1_hl0:">
                    <Link
                      href="/works"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="japsy1x"
                    >
                      <motion.span
                        className={pathname === "/works" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="4puwt6."
                      >
                        Works
                      </motion.span>
                    </Link>
                  </StaggerItem>
                  <StaggerItem data-oid="ueerinh">
                    <Link
                      href="/blog"
                      className="nav-link text-sm desktop-nav-link"
                      data-nav-type="desktop"
                      data-oid="c6bkwn6"
                    >
                      <motion.span
                        className={pathname === "/blog" ? "text-primary" : ""}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        data-oid="eoojhk3"
                      >
                        Blog
                      </motion.span>
                    </Link>
                  </StaggerItem>

                  <StaggerItem data-oid="r.ugsh4">
                    <LanguageSwitcher variant="desktop" data-oid="_a.j3vq" />
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Mobile navigation */}
              <div
                className="flex md:hidden items-center space-x-2"
                data-oid="99pp64h"
              >
                <Sheet data-oid="5ou8cza">
                  <SheetTrigger asChild data-oid=".shy6nf">
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Menu"
                      data-oid=":_-8teb"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="_1mojo4"
                      >
                        <Menu data-testid="menu-icon" data-oid="bsxt6fk" />
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
                    data-oid="-8at:-u"
                  >
                    <StaggerContainer
                      className="flex flex-col space-y-6 mt-10"
                      delay={0.2}
                      data-oid="a_35lae"
                    >
                      <StaggerItem direction="down" data-oid="o6hdwhx">
                        <Link
                          href="/"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="xtd.3nj"
                        >
                          <motion.span
                            className={pathname === "/" ? "text-primary" : ""}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="w_mff.v"
                          >
                            Home
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="4.smxul">
                        <Link
                          href="/about"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="vk72jd5"
                        >
                          <motion.span
                            className={
                              pathname === "/about" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="nvndkfh"
                          >
                            About
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="9nspre-">
                        <Link
                          href="/works"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="5f-fn8d"
                        >
                          <motion.span
                            className={
                              pathname === "/works" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="uj-j9wf"
                          >
                            Works
                          </motion.span>
                        </Link>
                      </StaggerItem>
                      <StaggerItem direction="down" data-oid="7lb2so4">
                        <Link
                          href="/blog"
                          className="nav-link text-lg mobile-nav-link"
                          data-nav-type="mobile"
                          data-oid="1pxadje"
                        >
                          <motion.span
                            className={
                              pathname === "/blog" ? "text-primary" : ""
                            }
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                            data-oid="iq2d4su"
                          >
                            Blog
                          </motion.span>
                        </Link>
                      </StaggerItem>

                      <StaggerItem direction="down" data-oid="5d2wbaz">
                        <LanguageSwitcher variant="mobile" data-oid="ge9riwz" />
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
