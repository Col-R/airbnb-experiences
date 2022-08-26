import './App.css';
import React from 'react'
import cardData from './data'

// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

// assets

function App() {
  const cardElements = cardData.map(card => {
    return <Card 
      key = {card.id}
      // can also do {...card} but would need to remove card from all the prop references in the component
      card = {card}
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">
       {cardElements}
      </div>
    </div>
  );
}

export default App;

// import React from "react"
// import Joke from "./Joke"
// import jokesData from "./jokesData"

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }
