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
    <FadeIn data-oid="j51qc5y">
      <footer
        className="border-t border-[#d1d1c7] bg-background"
        data-oid="y-ka709"
      >
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]" data-oid=".k9r-rh">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="p-s5d11"
          >
            <StaggerContainer
              className="flex items-center space-x-6"
              data-oid="l0z_q5_"
            >
              <StaggerItem data-oid="rx11:zl">
                <Link
                  href="https://linkedin.com/in/mohamed-adil-al-sabri/"
                  target="_blank"
                  className="text-sm nav-link"
                  data-oid="y.i6l_4"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="t7:3xq2"
                  >
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="4.qcq6m">
                <Link
                  href="mailto:trueothem@gmail.com"
                  className="text-sm nav-link"
                  data-oid=":mn29wc"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid=".3166s0"
                  >
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="u4-.:y-">
                <Link
                  href="tel:+16172333948"
                  className="text-sm nav-link"
                  data-oid="tiz18:y"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="rjqnh6f"
                  >
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]" data-oid="xexay_p">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="akc2p9:"
          >
            <StaggerContainer
              className="flex justify-end items-center space-x-6"
              data-oid="oe0.2ho"
            >
              <StaggerItem data-oid="qz:b_:y">
                <Link
                  href="/privacy"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="z1eg1ao"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="3_qpqo4"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="w94igwu">
                <Link
                  href="/terms"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="0vf6.ik"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="dtjgsuj"
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="jq1tloj">
                <Link
                  href="/sitemap"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="ugfqgv8"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="kax3_3_"
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
          data-oid="ri41vao"
        >
          <FadeIn delay={0.3} data-oid="8kqjyo0">
            <div
              className="flex justify-center items-center"
              data-oid="wbyir4."
            >
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                data-oid="x24xcza"
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
