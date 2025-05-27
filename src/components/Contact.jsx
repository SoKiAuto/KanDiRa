import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-28
        text-gray-800 dark:text-white overflow-hidden min-h-[40vh]
        transition-colors duration-500 bg-white dark:bg-[#0f172a]
      "
    >
      {/* 🔢 Animated Binary Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="
            absolute w-[100%] h-[200%] text-[10px] sm:text-[12px] font-mono whitespace-pre leading-tight
            text-black dark:text-white opacity-10 dark:opacity-12 animate-scrollBinary
          "
        >
          {Array(100 * 3).fill(
            "01010110  10010110  11001100  10101010  11110000  01010100  00011111  10000011  00110010  11010101  01111000  01010111  00101010  11101010  10001111  01010110  10010110  11001100  10101010  11110000  01010100  00011111  10000011  00110010  11010101  01111000  01010111  00101010  11101010  10001111  01010110  10010110  11001100  10101010  11110000  01010100  00011111  10000011  00110010  11010101  01111000  01010111  00101010  11101010  10001111  01010110  10010110  11001100  10101010  11110000  01010100  00011111  10000011  00110010  11010101  01111000  01010111  00101010  11101010  1000111"
          ).join('\n')}
        </div>
      </div>

      {/* 💫 Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-20 max-w-xl w-full text-center px-6 py-12 rounded-3xl
          bg-white/20 dark:bg-gray-900/30
          backdrop-blur-xl border border-transparent
          shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(129,140,248,0.3)]
          dark:shadow-[0_0_20px_rgba(129,140,248,0.7),0_0_60px_rgba(59,130,246,0.8)]
          transition-all duration-700
          hover:shadow-[0_0_30px_rgba(59,130,246,0.9),0_0_50px_rgba(129,140,248,0.6)]
          dark:hover:shadow-[0_0_30px_rgba(129,140,248,1),0_0_80px_rgba(59,130,246,1)]
        "
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Let’s Work Together!
        </h2>

        <p className="mb-4 text-gray-700 dark:text-gray-300 text-lg">
          📍 Ahmedabad, Gujarat, India
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300 text-lg">
          📞 +91 9313437650
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-lg">
          📧 hello@kandira.tech
        </p>

        <div className="flex justify-center space-x-6 text-blue-600 dark:text-blue-400 text-lg">
          <a href="#" className="hover:underline" aria-label="Instagram">Instagram</a>
          <a href="#" className="hover:underline" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" className="hover:underline" aria-label="GitHub">GitHub</a>
          <a href="#" className="hover:underline" aria-label="Twitter">Twitter</a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
