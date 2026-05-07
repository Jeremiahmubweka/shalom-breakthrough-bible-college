"use client";

import { motion } from "framer-motion";

export default function Admissions() {
  return (
    <section
      id="admissions"
      className="py-28 px-6 bg-gradient-to-r from-blue-950 to-blue-900 text-white relative overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="uppercase tracking-[0.4em] text-yellow-400 font-semibold mb-6"
        >
          Admissions Open
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
        >
          Begin Your Ministry <br />
          Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed mb-12"
        >
          Join a generation of believers being equipped spiritually,
          academically and practically for Kingdom impact and transformational
          leadership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold transition">
            Apply Now
          </button>

          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition">
            Download Prospectus
          </button>
        </motion.div>

      </div>
    </section>
  );
}