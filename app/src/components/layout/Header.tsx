import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { label: 'Showroom', href: '#showroom' },
  { label: 'Værksted', href: '#workshop' },
  { label: 'Brands', href: '#brands' },
  { label: 'Leasing', href: '#leasing' },
  { label: 'Om os', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Kontakt', href: '#contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex flex-col">
              <span className="text-white text-lg font-light tracking-[0.2em]">
                SEMLER
              </span>
              <span className="text-white text-[10px] font-light tracking-[0.3em]">
                PREMIUM
              </span>
            </a>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-3xl md:text-4xl font-light tracking-wide hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
