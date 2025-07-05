import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Website Development',
    points: [
      'Fast, responsive, mobile-friendly designs',
      'Built with React, Vite, TailwindCSS',
      'SEO-optimized and easy to maintain',
      'Supports portfolios, businesses, e-commerce',
    ],
  },
  {
    title: 'Mobile App Development',
    points: [
      'Custom Android apps tailored to your vision',
      'Optimized for speed, UX, and reliability',
      'Integrated with real-time databases and APIs',
    ],
  },
  {
    title: 'Dashboards & Data Solutions',
    points: [
      'Admin dashboards with intuitive controls',
      'Live charts and analytics',
      'Built with MongoDB + React for scalability',
    ],
  },
  {
    title: 'UI/UX & Branding',
    points: [
      'Brand-first web & mobile design approach',
      'Custom logo, theme, and visual identity',
      'Responsive layouts built with TailwindCSS',
    ],
  },
  {
    title: 'Digital Marketing',
    points: [
      'Social media advertising (Meta, Google, etc.)',
      'Lead generation campaigns that convert',
      'Email, SMS & WhatsApp marketing strategy',
    ],
  },
  {
    title: 'Social Media Management',
    points: [
      'Content planning & creation',
      'Instagram, Facebook & LinkedIn growth',
      'Analytics and performance reporting',
    ],
  },
]

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-28
        text-gray-800 dark:text-white overflow-hidden min-h-[100vh]
        transition-colors duration-500 bg-gray-50 dark:bg-[#0f172a]
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
        className="relative z-20 max-w-6xl w-full text-center"
      >
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 relative inline-block px-2">
          Our{' '}
          <span className="text-blue-600 dark:text-blue-300 relative">
            Service
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-500 rounded-full animate-glowUnderline"></span>
          </span>
        </h1>

        {/* Blank space here */}
            <div className="my-10"></div> 

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
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
                rounded-3xl p-6 text-left
                hover:shadow-[0_0_30px_rgba(59,130,246,0.9),0_0_50px_rgba(129,140,248,0.6)]
                dark:hover:shadow-[0_0_30px_rgba(129,140,248,1),0_0_80px_rgba(59,130,246,1)]
                transition-shadow duration-500 cursor-default
              "
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{service.title}</h3>
              <ul className="list-disc list-inside text-gray-300 dark:text-gray-400 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Services
