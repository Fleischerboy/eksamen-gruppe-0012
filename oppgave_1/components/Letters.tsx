// TODO: Her er det bugs

const letterList = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ')

type LettersProps = {
  getMessage: () => string
  guesses: string[]
  handleGuess: (letter: string) => void   // endret bokstavargumenttype fra tall til string
} 

type LetterProps = Pick<LettersProps, 'handleGuess' | 'guesses' | 'getMessage'> & {
  letter: string
}

export default function Letters({
  handleGuess,
  guesses,
  getMessage,
}: LettersProps) {
  return (
    <>
      <p className="message">{getMessage()}</p>
      <ul className="letters">
        {letterList.map((letter) => (         /* Bruker map funksjon istedenfor forEach funksjon for å gjengi bokstavkomponenter   */
          <Letter
            handleGuess={handleGuess}
            guesses={guesses}
            key={letter}
            letter={letter}
            getMessage={getMessage}
          />
        ))}
      </ul>
    </>
  )
}

const Letter = ({ letter, handleGuess, guesses, getMessage }: LetterProps) => {
  const letterMatch = guesses.includes(letter.toLowerCase())                // sant når spillet er løst eller over.
  const isGameSolvedOrOver = ['Du klarte det', 'Du tapte. Prøv igjen'].includes(getMessage())
  return (
    <button
      onClick={() => handleGuess(letter)}
      disabled={isGameSolvedOrOver || letterMatch}       // bokstavknappen er deaktivert hvis spillet er løst eller over eller hvis bokstaven allerede er i bruk
      className={`letter ${letterMatch ? 'highlight' : ''}`}               
    >
      {letter}
    </button>
  )
}
