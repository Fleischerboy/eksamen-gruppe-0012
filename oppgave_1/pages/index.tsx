// TODO: Her er det bugs

import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import Letters from '../components/Letters'
import Strikes from '../components/Strikes'
import Words from '../components/Words'
import { Country } from '../data'
import { useGame } from '../hooks/useGame'

type HomeProps = {
  countryData: Country;
}

const Home: NextPage<HomeProps> = ({ countryData }) => {
  const isFirstRender = useRef(true)
  const {
    country,
    setCountry,
    isMatch,
    wordSplit,
    handleGuess,
    guesses,
    strikes,
    getMessage,
  } = useGame()

  useEffect(() => {
    if (!isFirstRender.current) return
    isFirstRender.current = false
    if (countryData) setCountry(countryData)   // Oppdaterer verdien av landet med hentede data
  }, [setCountry, countryData])

  return (
    <main>
      <h1>Gjett flagget</h1>
      <p className="flag">{countryData?.unicodeFlag}</p> 
      <Strikes strikes={strikes} /> 
      <Words words={wordSplit()} isMatch={isMatch} />   
      <Letters                                       // Passerer mangler isMatch to Words-komponenten for å matche ordene med valgte bokstaver
        handleGuess={handleGuess}
        guesses={guesses}
        getMessage={getMessage}
      />
    </main>
  )
}

// bruker getServerSideProps i stedet for useEffect for å hente API-data
export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/countries', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)     // lagrer hentede data i datavariabel

  // console.log('data', data)
  return {
    props: { countryData: data.data },   // Sender fetched data til Home page props
  }
}

export default Home
