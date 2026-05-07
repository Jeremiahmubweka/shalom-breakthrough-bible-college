"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Pastor Daniel",
    text: "This college transformed my spiritual life and ministry completely.",
  },
  {
    name: "Grace Wanjiku",
    text: "I discovered my calling and developed strong biblical foundations.",
  },
  {
    name: "Evangelist Peter",
    text: "Excellent spiritual environment and powerful ministry training.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-gray-50 dark:bg-blue-950">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.4em] text-yellow-500 font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6">
            Lives Being Transformed
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-black p-10 rounded-3xl shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                "{testimonial.text}"
              </p>

              <h3 className="text-xl font-bold text-blue-950 dark:text-white">
                {testimonial.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}