import { useState } from 'react'
import Garage from './Garage'

const Car = ({ model, name }) => {
    const [color, setColor] = useState('blue')
    return (
        <>
            <h2>This car is a {color} {model}</h2>
            <Garage size='small' />
        </>
    )
}

export default Car