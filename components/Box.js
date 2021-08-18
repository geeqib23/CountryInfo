import React from 'react'
import Link from 'next/link'

function Box({ index, country }) {
  return (
    <div key={index} className='flex border-2 w-2/5 m-2'>
      <img className=' w-2/5 m-4' alt='Flag' src={country.flag}></img>
      <div className='m-4'>
        <div className=' font-bold text-2xl ml-2'>{country.name}</div>
        <div className='ml-2'>
          Currency :{' '}
          {country.currencies.map(currency => (
            <span>{currency.name}</span>
          ))}
        </div>
        <div className='ml-2'>Timezone : {country.timezones[0]}</div>
        <div className='mx-2 my-4'>
          <span className=' border-4 rounded-sm border-blue-800 text-xl text-blue-800 font-bold p-2 my-2'>
            <Link href={`/${country.name}`}>Details</Link>
          </span>
          <a
            className=' border-4 rounded-sm border-blue-800 text-xl text-blue-800 font-bold p-2 my-2 ml-5'
            href='#'
          >
            Show Map
          </a>
        </div>
      </div>
    </div>
  )
}

export default Box
