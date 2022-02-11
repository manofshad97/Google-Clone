import React from 'react'
import { MoonIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <button
      className={`w-10 lg:w-auto h-10 lg:h-auto mt-6 lg:mt-0 rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${
        darkMode ? 'shadow-gray-800' : null
      } transition duration-300 hover:scale-110`}
      onClick={toggleDarkMode}
    >
      <MoonIcon
        className={`h-6 lg:h-8 w-6 lg:w-8 cursor-pointer stroke-1 fill-none  ${
          darkMode
            ? 'fill-yellow-400 stroke-yellow-400'
            : 'fill-none stroke-neutral-400'
        }`}
      />
    </button>
  )
}

export default ThemeIcon
