"use client";

import { motion } from "framer-motion";
import {
  FaBookBible,
  FaChurch,
  FaGlobe,
} from "react-icons/fa6";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-white dark:bg-black overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-yellow-500 font-semibold mb-4">
            About The College
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-blue-950 dark:text-white mb-8 leading-tight">
            Raising Spirit-Filled <br />
            Kingdom Leaders
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full mb-8"></div>

          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Shalom Breakthrough Bible College is committed to equipping believers
            with sound biblical doctrine, spiritual maturity and ministry
            excellence to impact churches, communities and nations for Jesus
            Christ.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop"
              alt="Bible College"
              className="rounded-3xl shadow-2xl w-full object-cover h-[550px]"
            />

          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="space-y-8">

              {/* Card 1 */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-3xl bg-gray-50 dark:bg-blue-950 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-100">
                  <FaBookBible className="text-3xl text-yellow-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3">
                    Biblical Excellence
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Deep theological training rooted in Scripture and guided by
                    the Holy Spirit for transformational ministry.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-3xl bg-gray-50 dark:bg-blue-950 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-100">
                  <FaChurch className="text-3xl text-yellow-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3">
                    Ministry Preparation
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Equipping students practically for pastoral ministry,
                    discipleship, missions and servant leadership.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex gap-6 p-6 rounded-3xl bg-gray-50 dark:bg-blue-950 shadow-sm hover:shadow-xl transition"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-yellow-100">
                  <FaGlobe className="text-3xl text-yellow-500" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-blue-950 dark:text-white mb-3">
                    Global Kingdom Impact
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Raising leaders who will transform communities and nations
                    through the Gospel of Jesus Christ.
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}