import React from 'react'

const Footer = () => {
  return (
    <footer
      className="
        text-center py-6 border-t
        bg-gray-50 dark:bg-[#0f172a]
        border-gray-600 dark:border-gray-700
        text-gray-600 dark:text-gray-400
        text-sm
        transition-colors duration-500
        mt-10
      "
    >
      &copy; {new Date().getFullYear()} KanDiRa Tech Solutions •{' '}
      <a
        href="https://www.kandira.tech"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        www.kandira.tech
      </a>
    </footer>
  )
}

export default Footer
