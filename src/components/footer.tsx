"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-serif text-xl">
              <span className="font-normal">Know</span>
              <span className="-ml-0.5 italic opacity-70">see.</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <a href="#process" className="hover:text-white">
              Process
            </a>
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="mailto:hello@knowsee.co.uk" className="hover:text-white">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Knowsee
          </p>
        </div>
      </div>
    </footer>
  );
}
