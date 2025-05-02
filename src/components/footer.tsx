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
    <FadeIn data-oid="tcj.p.9">
      <footer
        className="border-t border-[#d1d1c7] bg-background"
        data-oid=".lyjvhl"
      >
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]" data-oid="3b9x4a4">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid=".ks2jnh"
          >
            <StaggerContainer
              className="flex items-center space-x-6"
              data-oid=":dot_i1"
            >
              <StaggerItem data-oid="1w9x1jp">
                <Link
                  href="https://linkedin.com/in/mohamed-adil-al-sabri/"
                  target="_blank"
                  className="text-sm nav-link"
                  data-oid="7q2uzlk"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="xt1:09m"
                  >
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="nny2rtx">
                <Link
                  href="mailto:trueothem@gmail.com"
                  className="text-sm nav-link"
                  data-oid="thdxst4"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="_b4han6"
                  >
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="72vdsa2">
                <Link
                  href="tel:+16172333948"
                  className="text-sm nav-link"
                  data-oid="8cbksri"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="4a8u3ef"
                  >
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]" data-oid="7c0nw41">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="lvodc4d"
          >
            <StaggerContainer
              className="flex justify-end items-center space-x-6"
              data-oid="ju479ud"
            >
              <StaggerItem data-oid="5..nzl7">
                <Link
                  href="/privacy"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="rvmya8m"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="gr3zd5n"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="6b4jxzh">
                <Link
                  href="/terms"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="tdstnkm"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="5t_9whk"
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="vbo0q53">
                <Link
                  href="/sitemap"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="25wzw:3"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="kmhf134"
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
          data-oid="mhbh:qj"
        >
          <FadeIn delay={0.3} data-oid=":k37e59">
            <div
              className="flex justify-center items-center"
              data-oid="vzxm14e"
            >
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                data-oid="2nqivb4"
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
