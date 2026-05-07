"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center text-center bg-gradient-to-b from-blue-950 via-blue-900 to-black text-white"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl"></div>

      {/* 🕊️ Improved Dove Animation (LOCAL IMAGE) */}
      <motion.div
        className="absolute z-10"
        initial={{
          x: -300,
          y: 120,
          opacity: 0,
          rotate: -15,
          scale: 0.9,
        }}
        animate={{
          x: 450,
          y: -150,
          opacity: 1,
          rotate: 15,
          scale: 1,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Image
          src="/dove.png"
          alt="Flying Dove"
          width={160}
          height={160}
          priority
          className="opacity-80 drop-shadow-xl"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 px-6">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="uppercase tracking-[0.4em] text-yellow-400 mb-6 font-semibold"
        >
          Welcome To
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold leading-tight mb-8"
        >
          Shalom Breakthrough <br />
          Bible College
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-xl text-gray-200 leading-relaxed mb-10"
        >
          Equipping believers for ministry, leadership and transformational
          Kingdom impact through biblical excellence and spiritual formation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition">
            Apply Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
            Explore Programs
          </button>
        </motion.div>
      </div>
    </section>
  );
}