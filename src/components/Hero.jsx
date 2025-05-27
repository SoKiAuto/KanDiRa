import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      className="
        relative flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-28
        text-gray-800 dark:text-white overflow-hidden min-h-[100vh]
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
        className="
          relative z-20 max-w-full sm:max-w-xxl mx-auto text-center p-6 sm:p-12 rounded-3xl
          bg-white/20 dark:bg-gray-900/30
          backdrop-blur-xl border border-transparent
          shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(129,140,248,0.3)]
          dark:shadow-[0_0_20px_rgba(129,140,248,0.7),0_0_60px_rgba(59,130,246,0.8)]
          transition-all duration-700
          hover:shadow-[0_0_30px_rgba(59,130,246,0.9),0_0_50px_rgba(129,140,248,0.6)]
          dark:hover:shadow-[0_0_30px_rgba(129,140,248,1),0_0_80px_rgba(59,130,246,1)]
        "
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 relative inline-block px-2">
          Your Vision,{' '}
          <span className="text-blue-600 dark:text-blue-300 relative">
            Our Code
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 rounded-full animate-glowUnderline"></span>
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-8 tracking-wide px-2">
          We craft scalable digital products with clean code, elegant UI, and seamless experience—
          turning your tech dreams into reality.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="
            inline-block px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-700 hover:to-indigo-700 rounded-lg text-white
            font-semibold shadow-lg shadow-blue-500/50 hover:shadow-blue-600/70
            transition-all duration-300
            ring-2 ring-blue-500 ring-offset-2 ring-offset-transparent
            hover:ring-offset-blue-600
            focus:outline-none focus:ring-4 focus:ring-blue-500/70
            max-w-full
            truncate
          "
        >
          Let’s Work Together 🚀
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
