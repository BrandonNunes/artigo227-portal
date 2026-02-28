/* eslint-disable @next/next/no-img-element */
"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Manifesto", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "O que Atuamos", href: "/oque-atuamos" },
    { label: "Projetos", href: "/projetos" },
    { label: "Publicações", href: "/publicacoes" },
    { label: "Parcerias", href: "/parcerias" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-surface">
      <div className="max-w-7xl mx-auto sm:p6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group cursor-pointer ml-4"
        >
          <img
            src="/logos/logo-artigo227.png"
            alt="artigo-227-logo"
            className="h-16 w-auto "
          />
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-text-main hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          className="cursor-pointer hidden md:flex group relative 
        bg-(--artigo227-blue) hover:bg-(--artigo227-orange) transition-colors
         duration-300 h-10 px-8 items-center justify-center text-white font-display 
         font-bold text-sm tracking-widest uppercase clip-triangle-btn pr-10 
         shadow-hard hover:shadow-hard-hover"
        >
          <span>CONTATE-NOS</span>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-(--artigo227-blue) p-2 cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-surface">
          <nav className="flex flex-col items-center gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold uppercase tracking-wider text-(--artigo227-blue) hover:text-(--artigo227-blue-hover) transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full bg-(--artigo227-blue) text-white font-display font-bold text-sm py-3 mt-2 hover:bg-(--artigo227-blue-hover) transition-colors">
              CONTATE-NOS
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
