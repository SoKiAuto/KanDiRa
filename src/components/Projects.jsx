import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Dashboard for Manufacturing Company',
    desc: 'Built a full data management dashboard with live updates and clean UI.',
  },
  {
    title: 'Custom Portfolios for 5 Clients',
    desc: 'Modern, mobile-friendly portfolios with smooth animations.',
  },
  {
    title: 'Client-Specific APKs',
    desc: 'Developed custom Android apps to meet unique business needs.',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-28
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
        className="relative z-20 max-w-5xl w-full text-center"
      >
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 relative inline-block px-2">
          Featured{' '}
          <span className="text-blue-600 dark:text-blue-300 relative">
            Work
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 rounded-full animate-glowUnderline"></span>
          </span>
        </h1>

            {/* Blank space here */}
            <div className="my-10"></div> 

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7, ease: 'easeOut' }}
              className="
                bg-white/20 dark:bg-gray-900/30
                backdrop-blur-xl border border-transparent
                shadow-[0_0_20px_rgba(59,130,246,0.5),0_0_40px_rgba(129,140,248,0.3)]
                dark:shadow-[0_0_20px_rgba(129,140,248,0.7),0_0_60px_rgba(59,130,246,0.8)]
                rounded-3xl p-6
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9),0_0_50px_rgba(129,140,248,0.6)]
                dark:hover:shadow-[0_0_30px_rgba(129,140,248,1),0_0_80px_rgba(59,130,246,1)]
                transition-shadow duration-500 cursor-default
              "
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{project.title}</h3>
              <p className="text-gray-300 dark:text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
