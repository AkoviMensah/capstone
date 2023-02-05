import React from 'react'
import Button from './Button'
import Card from './Card'
import Promo from './Promo'

const Homepage = () => {
    return (
        <main>
            <h1>Homepage</h1>
            <Promo />
            <Button title="Online Menu" />
            <Card />
        </main>
    )
}

export default Homepage