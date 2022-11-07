// TODO: Her er det bugs

export type Strike = { icon: string }

export default function Strikes({ strikes }: { strikes: Strike[] }) {     
  return (
    <ul className="strikes">                                
      {strikes.map((strike: Strike, index: number) => (  /* Bruker maps funksjon istedenfor forEach for å gjengi streikeikoner */
        <li key={index}>{strike.icon}</li>
      ))} 
    </ul>   
  )
}
