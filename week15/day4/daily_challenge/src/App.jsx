import { useState } from 'react'
import LanguageCard from './Components/Languages'
import './App.css'



function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ])

  const addVote = (name) => {
    const result = languages.map(language => {
      if (name === language.name) {
        return { ...language, votes: language.votes + 1 }
      }
      else {
        return language
      }
    })

    setLanguages(result)
  }

  return (
    <div>
      {languages.map(language => (
        <LanguageCard name={language.name} votes={language.votes} addVote={addVote} />
      ))}
    </div>
  )
}

export default App
