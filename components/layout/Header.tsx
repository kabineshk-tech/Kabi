'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Customer segment', href: '/customer-segment/' },
  { label: 'Products', href: '/products/' },
  { label: 'Services', href: '/services/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Career', href: '/career/' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span className="text-xl font-bold text-[#12283F]">
            <span className="text-[#FD504F]">P</span>eriyanayaki
          </span>
          <span className="text-[10px] text-gray-500 font-normal">
            Build Homes Beautiful Since 1973
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-gray-700 hover:text-[#FD504F] transition-colors text-sm xl:text-base whitespace-nowrap',
                pathname === item.href && 'text-[#FD504F] font-medium'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Button */}
        <Link
          href="/contact/"
          className="hidden lg:inline-flex items-center bg-[#12283F] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#0d1d2e] transition-colors min-h-[44px] shrink-0"
        >
          Contact
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={handleMenuToggle}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-white border-t px-4 py-4 flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-gray-700 hover:text-[#FD504F] transition-colors min-h-[44px] flex items-center',
                pathname === item.href && 'text-[#FD504F] font-medium'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
