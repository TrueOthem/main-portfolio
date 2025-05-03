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
    <FadeIn data-oid="9eqopxj">
      <footer
        className="border-t border-[#d1d1c7] bg-background"
        data-oid="x-6omh2"
      >
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]" data-oid="p-rgf0b">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="k072wif"
          >
            <StaggerContainer
              className="flex items-center space-x-6"
              data-oid="yjeexdq"
            >
              <StaggerItem data-oid="j.5tr-b">
                <Link
                  href="https://linkedin.com/in/mohamed-adil-al-sabri/"
                  target="_blank"
                  className="text-sm nav-link"
                  data-oid="59dm045"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="h9drfrk"
                  >
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="p.ijv4f">
                <Link
                  href="mailto:trueothem@gmail.com"
                  className="text-sm nav-link"
                  data-oid="5h80l_b"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="u8273xw"
                  >
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="2ccrs0e">
                <Link
                  href="tel:+16172333948"
                  className="text-sm nav-link"
                  data-oid="3tsiqbr"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="4fg63x3"
                  >
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]" data-oid=".r7qhj5">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="hhbw0z_"
          >
            <StaggerContainer
              className="flex justify-end items-center space-x-6"
              data-oid="12b3vo3"
            >
              <StaggerItem data-oid="g1i4166">
                <Link
                  href="/privacy"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="3fhbss2"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="c3k9tbq"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="j69dqeu">
                <Link
                  href="/terms"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="2.k1e63"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="x-ksldh"
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="0fkon16">
                <Link
                  href="/sitemap"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="1ozmcwq"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="t.turv1"
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
          data-oid="ygo_st8"
        >
          <FadeIn delay={0.3} data-oid="cx7hb_h">
            <div
              className="flex justify-center items-center"
              data-oid="56of_t_"
            >
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                data-oid="07gfb-a"
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
