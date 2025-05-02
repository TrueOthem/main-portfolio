"use client";

import Link from "next/link";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/ui/motion";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FadeIn data-oid="6gl01c_">
      <footer
        className="border-t border-[#d1d1c7] bg-background"
        data-oid="y8onjx6"
      >
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]" data-oid=":8l6f6r">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="-uuqzf1"
          >
            <StaggerContainer
              className="flex items-center space-x-6"
              data-oid="ooidlj2"
            >
              <StaggerItem data-oid="a2dxg3z">
                <Link
                  href="https://linkedin.com/in/mohamed-adil-al-sabri/"
                  target="_blank"
                  className="text-sm nav-link"
                  data-oid="c7k9t-0"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="q1gr5tk"
                  >
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="b22azkk">
                <Link
                  href="mailto:trueothem@gmail.com"
                  className="text-sm nav-link"
                  data-oid="i9i9bib"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="np94hre"
                  >
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="psdk4t4">
                <Link
                  href="tel:+16172333948"
                  className="text-sm nav-link"
                  data-oid="5cf2e:5"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="b9iq.wm"
                  >
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]" data-oid="n16-i4h">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="kazedgy"
          >
            <StaggerContainer
              className="flex justify-end items-center space-x-6"
              data-oid="s2wid:h"
            >
              <StaggerItem data-oid="klgfd64">
                <Link
                  href="/privacy"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="hl2uvae"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="u1y:7ok"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="y0esvfz">
                <Link
                  href="/terms"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid=":rw-euf"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="dt4.es2"
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="hvyg_ds">
                <Link
                  href="/sitemap"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="9wtl_tf"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="bb836fg"
                  >
                    Sitemap
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Credits */}
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
          data-oid="nubphpn"
        >
          <FadeIn delay={0.3} data-oid="jdy41_h">
            <div
              className="flex justify-center items-center"
              data-oid="gc4.0-f"
            >
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                data-oid="-8n-wwx"
              >
                &copy; {currentYear} Mohamed Adil Al Sabri. All rights reserved.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </footer>
    </FadeIn>
  );
}
