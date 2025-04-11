'use client';

import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/motion';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FadeIn>
      <footer className="border-t border-[#d1d1c7] bg-background">
        {/* Social links */}
        <div className="border-b border-[#d1d1c7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <StaggerContainer className="flex items-center space-x-6">
              <StaggerItem>
                <Link href="https://linkedin.com/in/mohamed-adil-al-sabri/" target="_blank" className="text-sm nav-link">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    LinkedIn
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="mailto:trueothem@gmail.com" className="text-sm nav-link">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    Email
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="tel:+16172333948" className="text-sm nav-link">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    Phone
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Additional footer content */}
        <div className="border-b border-[#d1d1c7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <StaggerContainer className="flex justify-end items-center space-x-6">
              <StaggerItem>
                <Link href="/privacy" className="text-sm footer-link" data-footer-link="true">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    Privacy Policy
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="/terms" className="text-sm footer-link" data-footer-link="true">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    Terms of Service
                  </motion.span>
                </Link>
              </StaggerItem>
              <StaggerItem>
                <Link href="/sitemap" className="text-sm footer-link" data-footer-link="true">
                  <motion.span whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                    Sitemap
                  </motion.span>
                </Link>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Credits */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <FadeIn delay={0.3}>
            <div className="flex justify-center items-center">
              <motion.p
                className="text-sm text-muted-foreground"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
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
