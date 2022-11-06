// TODO: Her er det bugs

import { useState } from 'react'
import { Strike } from '../components/Strikes'

const initialStrikes = [{ icon: '⚪' }, { icon: '⚪' }, { icon: '⚪' }]
                                  // fjernet guess properties siden det ikke har noen brukstilfeller
type Country = {
  name: string
  unicodeFlag: string
} | null

export const useGame = () => {
  const [guesses, setGuesses] = useState<string[]>([])
  const [strikes, setStrikes] = useState<Strike[]>(initialStrikes)
  const [country, setCountry] = useState<Country>(null)

  const isSolved = (country: Country, guesses: string[]) => {
    if (!country) return false
    return [...country.name.replaceAll(' ', '').toLowerCase()].every(
      (letter) => {
        return guesses.includes(letter)
      }
    )
  }
      // sant når det ikke er noen sirkelikoner igjen
  const isGameOver = strikes.every((strike: any) => strike.icon !== '⚪')
    ? true
    : false

  const getMessage = () => {
    if (isSolved(country, guesses) && !isGameOver) return 'Du klarte det'
    else if (isGameOver) return 'Du tapte. Prøv igjen'
    else return 'Velg en bokstav'
  }

  const isMatch = (letter: string) => {
    if (guesses.find((guess: any) => guess === letter.toLowerCase())) {
      return letter
    }
    return '_'
  }

  const wordSplit = () => {
    return (
      country?.name?.split(' ').map((word: string) => word.split('')) || null
    )
  }

  const handleGuess = (letter: string) => {
    if (!country?.name?.toLowerCase().includes(letter.toLowerCase())) {
      const strikeCopy = [...strikes]
      strikeCopy.pop()
      strikeCopy.unshift({ icon: '🚫' })         // pusher forbudsikonet til første indeks
      console.log(strikeCopy)              // oppdaterer streikelisten for å representere antall sjanser igjen
      setStrikes(strikeCopy)
    }
    setGuesses((prev: string[]) => [...prev, letter.toLowerCase()])
  }

  return {
    guesses,
    setGuesses,
    strikes,
    setStrikes,
    country,
    setCountry,
    isMatch,
    isGameOver,
    isSolved,
    handleGuess,
    getMessage,
    wordSplit,
  }
}
