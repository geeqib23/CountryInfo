import Head from 'next/head'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import Box from '../components/Box'

export default function Home({ countries }) {
  // const [countries, setCountries] = useState([])
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await Axios.get('https://restcountries.eu/rest/v2/all')
  //       console.log(response.data)
  //       setCountries(response.data)
  //       console.log(countries)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [])

  // useEffect(() => {
  //   if (countries.length != 0) console.log(countries)
  // }, [countries])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>All Countries List</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center justify-center w-full flex-1 px-20'>
        <div className='text-3xl font-bold text-left m-4'>Countries</div>
        {countries.map((country, index) => (
          <Box key={index} index={index} country={country}></Box>
        ))}
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  // try {
  const response = await Axios.get('https://restcountries.eu/rest/v2/all')
  console.log(response.data)
  // setCountries(response.data)
  // console.log(countries)
  // } catch (error) {
  //   console.log(error)
  // }
  return {
    props: { countries: response.data }, // will be passed to the page component as props
  }
}

{
  /* <Box
  country={{
    name: 'Colombia',
    topLevelDomain: ['.co'],
    alpha2Code: 'CO',
    alpha3Code: 'COL',
    callingCodes: ['57'],
    capital: 'Bogotá',
    altSpellings: [
      'CO',
      'Republic of Colombia',
      'República de Colombia',
    ],
    region: 'Americas',
    subregion: 'South America',
    population: 48759958,
    latlng: [4.0, -72.0],
    demonym: 'Colombian',
    area: 1141748.0,
    gini: 55.9,
    timezones: ['UTC-05:00'],
    borders: ['BRA', 'ECU', 'PAN', 'PER', 'VEN'],
    nativeName: 'Colombia',
    numericCode: '170',
    currencies: [
      {
        code: 'COP',
        name: 'Colombian peso',
        symbol: '$',
      },
    ],
    languages: [
      {
        iso639_1: 'es',
        iso639_2: 'spa',
        name: 'Spanish',
        nativeName: 'Español',
      },
    ],
    translations: {
      de: 'Kolumbien',
      es: 'Colombia',
      fr: 'Colombie',
      ja: 'コロンビア',
      it: 'Colombia',
      br: 'Colômbia',
      pt: 'Colômbia',
    },
    flag: 'https://restcountries.eu/data/col.svg',
    regionalBlocs: [
      {
        acronym: 'PA',
        name: 'Pacific Alliance',
        otherAcronyms: [],
        otherNames: ['Alianza del Pacífico'],
      },
      {
        acronym: 'USAN',
        name: 'Union of South American Nations',
        otherAcronyms: ['UNASUR', 'UNASUL', 'UZAN'],
        otherNames: [
          'Unión de Naciones Suramericanas',
          'União de Nações Sul-Americanas',
          'Unie van Zuid-Amerikaanse Naties',
          'South American Union',
        ],
      },
    ],
    cioc: 'COL',
  }}
></Box> */
}
