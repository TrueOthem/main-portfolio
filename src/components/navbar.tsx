'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/ui/motion';
import LanguageSwitcher from '@/components/common/language-switcher';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <FadeIn duration={0.6} direction="down">
      <header>
        <nav className="border-b border-[#d1d1c7] bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <HoverScale scale={1.05}>
                  <div className="flex items-center">
                    <motion.div
                      className="w-6 h-6 bg-primary mr-2"
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-lg font-medium">Mohamed Al Sabri</span>
                  </div>
                </HoverScale>
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <StaggerContainer staggerChildren={0.05} className="flex items-center space-x-6">
                <StaggerItem>
                  <Link href="/" className="nav-link text-sm desktop-nav-link" data-nav-type="desktop">
                    <motion.span
                      className={pathname === '/' ? 'text-primary' : ''}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Home
                    </motion.span>
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link href="/about" className="nav-link text-sm desktop-nav-link" data-nav-type="desktop">
                    <motion.span
                      className={pathname === '/about' ? 'text-primary' : ''}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      About
                    </motion.span>
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link href="/works" className="nav-link text-sm desktop-nav-link" data-nav-type="desktop">
                    <motion.span
                      className={pathname === '/works' ? 'text-primary' : ''}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Works
                    </motion.span>
                  </Link>
                </StaggerItem>
                <StaggerItem>
                  <Link href="/blog" className="nav-link text-sm desktop-nav-link" data-nav-type="desktop">
                    <motion.span
                      className={pathname === '/blog' ? 'text-primary' : ''}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Blog
                    </motion.span>
                  </Link>
                </StaggerItem>

                <StaggerItem>
                  <LanguageSwitcher variant="desktop" />
                </StaggerItem>

              </StaggerContainer>
            </div>

            {/* Mobile navigation */}
            <div className="flex md:hidden items-center space-x-2">

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Menu data-testid="menu-icon" />
                    </motion.div>
                  </Button>
                </SheetTrigger>
                <SheetContent onCloseAutoFocus={() => {
                  // This ensures the mobile menu closes properly
                  const mobileLinks = document.querySelectorAll('[data-nav-type="mobile"]');
                  mobileLinks.forEach(link => {
                    if (link instanceof HTMLElement) {
                      link.style.display = 'none';
                      // Reset display after animation completes
                      setTimeout(() => {
                        if (link instanceof HTMLElement) {
                          link.style.display = '';
                        }
                      }, 500);
                    }
                  });
                }}>
                  <StaggerContainer className="flex flex-col space-y-6 mt-10" delay={0.2}>
                    <StaggerItem direction="down">
                      <Link href="/" className="nav-link text-lg mobile-nav-link" data-nav-type="mobile">
                        <motion.span
                          className={pathname === '/' ? 'text-primary' : ''}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Home
                        </motion.span>
                      </Link>
                    </StaggerItem>
                    <StaggerItem direction="down">
                      <Link href="/about" className="nav-link text-lg mobile-nav-link" data-nav-type="mobile">
                        <motion.span
                          className={pathname === '/about' ? 'text-primary' : ''}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          About
                        </motion.span>
                      </Link>
                    </StaggerItem>
                    <StaggerItem direction="down">
                      <Link href="/works" className="nav-link text-lg mobile-nav-link" data-nav-type="mobile">
                        <motion.span
                          className={pathname === '/works' ? 'text-primary' : ''}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Works
                        </motion.span>
                      </Link>
                    </StaggerItem>
                    <StaggerItem direction="down">
                      <Link href="/blog" className="nav-link text-lg mobile-nav-link" data-nav-type="mobile">
                        <motion.span
                          className={pathname === '/blog' ? 'text-primary' : ''}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Blog
                        </motion.span>
                      </Link>
                    </StaggerItem>

                    <StaggerItem direction="down">
                      <LanguageSwitcher variant="mobile" />
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
