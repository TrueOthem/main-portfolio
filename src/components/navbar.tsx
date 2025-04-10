'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-[#d1d1c7] bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-primary mr-2" />
                <span className="text-lg font-medium">Mohamed Al Sabri</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link text-sm">
              Home
            </Link>
            <Link href="/about" className="nav-link text-sm">
              About
            </Link>
            <Link href="/works" className="nav-link text-sm">
              Works
            </Link>
            <Link href="/blog" className="nav-link text-sm">
              Blog
            </Link>
            <ThemeToggle />
            <Link href="/contact">
              <Button className="main-button rounded-full text-sm">Contact</Button>
            </Link>
          </div>

          {/* Mobile navigation */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-10">
                  <Link href="/" className="nav-link text-lg">
                    Home
                  </Link>
                  <Link href="/about" className="nav-link text-lg">
                    About
                  </Link>
                  <Link href="/works" className="nav-link text-lg">
                    Works
                  </Link>
                  <Link href="/blog" className="nav-link text-lg">
                    Blog
                  </Link>
                  <Link href="/contact">
                    <Button className="main-button rounded-full text-lg w-full">Contact</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
