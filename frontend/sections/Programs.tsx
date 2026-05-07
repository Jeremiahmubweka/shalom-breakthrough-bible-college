"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Certificate in Theology",
    desc: "Strong biblical foundations for ministry and Christian leadership.",
  },
  {
    title: "Diploma in Ministry",
    desc: "Practical ministry preparation for pastors and church leaders.",
  },
  {
    title: "Worship & Music",
    desc: "Developing worship leaders grounded in biblical worship.",
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 px-6 bg-gray-50 dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-yellow-500 font-semibold mb-4">
            Our Programs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-white mb-6">
            Academic & Ministry Training
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Discover transformational programs designed to equip students
            spiritually, academically and practically for ministry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-blue-950 rounded-3xl p-10 shadow-md hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-4">
                {program.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {program.desc}
              </p>

              <button className="bg-yellow-500 hover:bg-yellow-400 px-6 py-3 rounded-full font-semibold">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}