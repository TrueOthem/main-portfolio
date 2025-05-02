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
    <FadeIn data-oid="_xu5yh_">
      <footer
        className="border-t border-[#d1d1c7] bg-background"
        data-oid="mx.1:oc"
      >
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]" data-oid="4iogah9">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="4ll0u45"
          >
            <StaggerContainer
              className="flex items-center space-x-6"
              data-oid="n:ss8fa"
            >
              <StaggerItem data-oid="jxu9byd">
                <Link
                  href="https://linkedin.com/in/mohamed-adil-al-sabri/"
                  target="_blank"
                  className="text-sm nav-link"
                  data-oid="iss6m4:"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="fxnye5u"
                  >
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="7hjyibb">
                <Link
                  href="mailto:trueothem@gmail.com"
                  className="text-sm nav-link"
                  data-oid="v-x2x2r"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="tg0fjf4"
                  >
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="af6::i_">
                <Link
                  href="tel:+16172333948"
                  className="text-sm nav-link"
                  data-oid="wyyp9gw"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="-g341g:"
                  >
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]" data-oid=":krkf2m">
          <div
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4"
            data-oid="kckxuc."
          >
            <StaggerContainer
              className="flex justify-end items-center space-x-6"
              data-oid="w_bavrp"
            >
              <StaggerItem data-oid="90ozv7s">
                <Link
                  href="/privacy"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="pqeg:3b"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="21gngs9"
                  >
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="z0i2238">
                <Link
                  href="/terms"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="cxau.6."
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="o_3orf."
                  >
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem data-oid="w4dos11">
                <Link
                  href="/sitemap"
                  className="text-sm footer-link"
                  data-footer-link="true"
                  data-oid="zds5ign"
                >
                  <motion.span
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    data-oid="gued1f."
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
          data-oid="5.7zjkz"
        >
          <FadeIn delay={0.3} data-oid="7smo4fb">
            <div
              className="flex justify-center items-center"
              data-oid="dq9zq.b"
            >
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                data-oid="jq08h.e"
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
