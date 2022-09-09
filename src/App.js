import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import StockContext from './context/StockContext'
import ThemeContext from './context/ThemeContext'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [stockSymbol, setStockSymbol] = useState('META')
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
