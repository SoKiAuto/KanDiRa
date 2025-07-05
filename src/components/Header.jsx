import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import Scrollspy from 'react-scrollspy'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = ['home', 'about', 'services', 'projects', 'contact']

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScrollResize = () => { 
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('scroll', handleScrollResize)
    window.addEventListener('resize', handleScrollResize)
    return () => {
      window.removeEventListener('scroll', handleScrollResize)
      window.removeEventListener('resize', handleScrollResize)
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-500 bg-white/80 dark:bg-gray-900/80
        ${scrolled ? 'shadow-md' : 'shadow-none'}
      `}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-2 select-none
             focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 rounded
             transition-shadow duration-300 hover:shadow-lg"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
          }}
          aria-label="Go to home"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              closeMenu()
              document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          title="Go to home section"
        >
          <img
            src="/KanDiRa.png"
            alt="KanDiRa Logo"
            className="h-14 w-auto sm:h-18"
            draggable={false}
          />
          <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
            KanDiRa
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden md:block">
          <Scrollspy
            items={navItems}
            currentClassName="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400 pb-1"
            className="flex space-x-10 text-gray-700 dark:text-gray-300 font-medium tracking-wide list-none"
            offset={-100}
          >
            {navItems.map((section) => (
              <li key={section} className="list-none">
                <a
                  href={`#${section}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </Scrollspy>
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-8 flex flex-col justify-center items-center group"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-1.5 w-full bg-gray-900 dark:bg-white rounded-lg origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-1.5 w-full bg-gray-900 dark:bg-white rounded-lg my-1.5"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-1.5 w-full bg-gray-900 dark:bg-white rounded-lg origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black dark:bg-black z-40"
              aria-hidden="true"
            />

            {/* Slide-in Menu */}
            <motion.nav
              key="mobileMenu"
              id="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 backdrop-blur-lg shadow-lg z-50 flex flex-col pt-24 px-8"
              aria-label="Mobile Navigation"
            >
              <ul className="flex flex-col space-y-6 text-gray-800 dark:text-gray-200 font-semibold text-lg">
                {navItems.map((section) => (
                  <li key={section} className="list-none">
                    <a
                      href={`#${section}`}
                      className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      onClick={closeMenu}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
