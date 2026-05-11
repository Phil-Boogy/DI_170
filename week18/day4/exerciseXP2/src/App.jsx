import { useState } from 'react'
import { TextInput } from './components/textInput'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextInput />
    </>
  )
}

export default App
