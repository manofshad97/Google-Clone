import React, { useState } from 'react'
import { XIcon, SearchIcon } from '@heroicons/react/solid'
import SearchResults from './SearchResults'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { searchSymbols } from '../api/stock-api'

const Search = () => {
  const [input, setInput] = useState('')
  const [bestMatches, setBestMatches] = useState([])

  const { darkMode } = useContext(ThemeContext)

  const clear = () => {
    setInput('')
    setBestMatches([])
  }

  const updateBestMatches = async () => {
    try {
      if(input) {
        const searchResults = await searchSymbols(input)
        const result = searchResults.result
        setBestMatches(result)
      }
    }

    catch(error){
      setBestMatches([])
      console.log(error)

    }
  }

  return (
    <div
      className={`flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200 ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-neutral-200'
      }`}
    >
      <input
        type="text"
        value={input}
        className={`w-full  px-4 py-2 focus:outline-none rounded-md ${darkMode ? 'bg-gray-900' : null}`}
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value)
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            updateBestMatches()
          }
        }}
      />
      {input && (
        <button className="m-1" onClick={clear}>
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}
      <button
        onClick={updateBestMatches}
        className="h-8 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2 transition duration-300 hover:ring-2 ring-indigo-400"
      >
        <SearchIcon className="h-4 w-4 fill-gray-100" />
      </button>

      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  )
}

export default Search
