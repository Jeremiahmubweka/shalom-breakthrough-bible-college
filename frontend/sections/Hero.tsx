"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-blue-950 to-blue-800 overflow-hidden flex items-center justify-center text-center text-white">

      {/* Dove Animation */}
      <motion.img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/White_Dove.svg/1200px-White_Dove.svg.png"
        alt="Dove"
        initial={{ x: -300, y: 50, opacity: 0 }}
        animate={{ x: 300, y: -50, opacity: 1 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute w-32 opacity-70"
      />

      <div className="z-10 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Shalom Breakthrough Bible College
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Equipping believers for ministry, leadership and Kingdom impact.
        </p>

        <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition">
          Apply Now
        </button>
      </div>
    </section>
  );
}