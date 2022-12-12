import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Card from './Card'

const Details = ({ details }) => {
  const { darkMode } = useContext(ThemeContext)
  const detailsList = {
    name: 'Name',
    country: 'Country',
    currency: 'Currency',
    exchange: 'Exchange',
    ipo: 'IPO Date',
    marketCapitalization: 'Market Capitilization',
    finnhubIndustry: 'Industry',
  }

  const convertMilliontoBillion = (number) => {
    return (number / 1000).toFixed(2)
  }
  return (
    <Card>
      <ul
        className={`w-full h-full flex flex-col justify-between divide-y-1 ${
          darkMode ? 'divide-gray-800' : null
        }`}
      >
      {/*Map over detailsList and create a span for each. (category names) Map over details and create a span for each (actual values)*/}
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>
                {item === 'marketCapitalization' && window.screen.width < 500
                  ? detailsList[item].substr(0, 10)
                  : detailsList[item]}
              </span>
              <span>
                {item === 'marketCapitalization'
                  ? `${convertMilliontoBillion(details[item])}B`
                  : details[item] === 'NASDAQ NMS - GLOBAL MARKET' &&
                    window.screen.width < 500
                  ? details[item].substr(0, 10)
                  : details[item] === 'NEW YORK STOCK EXCHANGE, INC.'
                  ? 'NYSE, Inc.'
                  : details[item]}
              </span>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}

export default Details
