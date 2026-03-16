"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import GlassSurface from "./glass-surface";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <nav className="mx-auto max-w-6xl">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={9999}
          backgroundOpacity={0.3}
          blur={16}
          saturation={1.2}
          className="px-8 py-5"
        >
          <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-serif text-2xl">
              <span className="font-light">Know</span>
              <span className="-ml-0.5 font-light italic opacity-70">see.</span>
            </span>
          </a>

          {/* Desktop Navigation — right-aligned */}
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </GlassSurface>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl border border-white/[0.08] bg-black/90 p-6 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-gray-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://calendly.com/saahil_mehta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 rounded-full bg-[#6214d9] px-5 py-3 text-center text-sm font-medium text-white"
                >
                  Book a call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
