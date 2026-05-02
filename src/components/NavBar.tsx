'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-cream/80 backdrop-blur-md z-50 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-ink font-serif text-2xl font-bold">
              Muza Org
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-ink hover:text-rust transition-colors">
              About
            </Link>
            <Link href="/issues" className="text-ink hover:text-rust transition-colors">
              Issues
            </Link>
            <Link href="/programs" className="text-ink hover:text-rust transition-colors">
              Programs
            </Link>
            <Link href="/report" className="text-ink hover:text-rust transition-colors">
              Report
            </Link>
            <Link href="/resources" className="text-ink hover:text-rust transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-ink hover:text-rust transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink hover:text-rust"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream">
            <Link href="/about" className="block px-3 py-2 text-ink hover:text-rust">
              About
            </Link>
            <Link href="/issues" className="block px-3 py-2 text-ink hover:text-rust">
              Issues
            </Link>
            <Link href="/programs" className="block px-3 py-2 text-ink hover:text-rust">
              Programs
            </Link>
            <Link href="/report" className="block px-3 py-2 text-ink hover:text-rust">
              Report
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-ink hover:text-rust">
              Resources
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-ink hover:text-rust">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}