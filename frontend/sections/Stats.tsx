"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Graduates" },
  { number: "20+", label: "Programs" },
  { number: "15+", label: "Years of Ministry" },
  { number: "30+", label: "Partner Churches" },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gray-50 dark:bg-blue-950 p-10 rounded-3xl shadow-md"
            >
              <h3 className="text-5xl font-bold text-yellow-500 mb-4">
                {stat.number}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}