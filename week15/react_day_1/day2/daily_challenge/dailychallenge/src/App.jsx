import { useState } from 'react'
import './App.css'
import MyCarousel from './MyCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyCarousel />
    </>
  )
}

export default App
