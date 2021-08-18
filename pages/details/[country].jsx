import axios from 'axios'
import React from 'react'

function Details(props) {
    const name = useParams
  useEffect(() => {
      async function fetchData(){
        const response = await axios.get("https://restcountries.eu/rest/v2/name/{name}")
      }
   
  }, [])  
  return (
    <div className='container'>
      <div>{country.name}</div>
      <div className='flex'>
        <img alt='flag' src={country.flag} className='w-1/2'></img>
        <div>
          Native Name : {country.nativeName}
          Capital : {country.capital}
          Population : {country.population}
          Region : {country.region}
          Subregion : {country.subregion}
          Area : {country.area}
          Languages :{' '}
          {country.languages.map(language => (
            <span> {language.name} </span>
          ))}
          Country Code : +{country.callingCodes[0]}
          Currencies :{' '}
          {country.currencies.map(currency => (
            <span> {currency.name} </span>
          ))}
          Timezones :{' '}
          {country.timezones.map(timezone => (
            <span> {timezone} </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const response = await axios.get("https://restcountries.eu/rest/v2/name/{name}")
  return {
    props: {}, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  const response = await Axios.get('https://restcountries.eu/rest/v2/all')
  
  return {
    paths: [
      { params: { ... } } // See the "paths" section below
    ],
    fallback: true or false // See the "fallback" section below
  };
}




export default Details
