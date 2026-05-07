"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-900">
          Shalom Breakthrough
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Programs</Link>
          <Link href="/">Admissions</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
}