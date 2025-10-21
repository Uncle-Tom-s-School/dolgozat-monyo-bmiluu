import BeerCard, { type Beer } from "./components/BeerCard"
import { useEffect, useState } from "react"

const App = () => {
  const [beer, setBeer] = useState<Beer[]>([])
  useEffect(() => {
    fetch("data.json")
      .then(x => x.json())
      .then(data => setBeer(data))
  }, [])
  return (
    <div className="beerCardWrapper">
      {beer.map(beer => <BeerCard{...beer} key={beer.name} />)}
    </div>
  )
}

export default App