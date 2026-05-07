"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-blue-950/90 backdrop-blur-md shadow-sm z-50 transition-all">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-950 dark:text-white">
          Shalom Breakthrough
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">

          <a href="#home" className="hover:text-yellow-500 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-500 transition">
            About
          </a>

          <a href="#programs" className="hover:text-yellow-500 transition">
            Programs
          </a>

          <a href="#admissions" className="hover:text-yellow-500 transition">
            Admissions
          </a>

          <a href="#contact" className="hover:text-yellow-500 transition">
            Contact
          </a>

          {/* Dark Mode Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-blue-900"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-4">

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-blue-900"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-900" />
            )}
          </button>

          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <X className="text-blue-950 dark:text-white" />
            ) : (
              <Menu className="text-blue-950 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white dark:bg-blue-950 px-6 pb-6 flex flex-col gap-4 text-gray-700 dark:text-gray-200">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact">Contact</a>

        </div>
      )}
    </nav>
  );
}