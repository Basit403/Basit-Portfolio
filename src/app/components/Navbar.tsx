"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "EXPERIENCE", href: "#experience" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F1624] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

        <Link href="/" className="text-2xl font-bold text-white tracking-wider">
          BASITCODE
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-10 text-white font-medium tracking-wider">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-orange-500 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-orange-500 px-5 py-3 rounded text-white font-semibold tracking-wider hover:bg-orange-600 transition"
          >
            CONTACT
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={32} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-[#0F1624] flex flex-col items-center justify-center gap-10 text-2xl text-white tracking-wider md:hidden">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setOpen(false)}
          >
            <X size={36} />
          </button>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
