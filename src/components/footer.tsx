'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d1d1c7] bg-background">
      {/* Social links */}
      <div className="border-b border-[#d1d1c7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-6">
            <Link href="https://linkedin.com/in/mohamed-adil-al-sabri/" target="_blank" className="text-sm nav-link">LinkedIn</Link>
            <Link href="mailto:trueothem@gmail.com" className="text-sm nav-link">Email</Link>
            <Link href="tel:+16172333948" className="text-sm nav-link">Phone</Link>
          </div>
        </div>
      </div>

      {/* Navigation and credit */}
      <div className="border-b border-[#d1d1c7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-end items-center space-x-6">
            <Link href="/" className="text-sm nav-link">Home</Link>
            <Link href="/about" className="text-sm nav-link">About</Link>
            <Link href="/works" className="text-sm nav-link">Works</Link>
            <Link href="/blog" className="text-sm nav-link">Blog</Link>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Mohamed Adil Al Sabri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
