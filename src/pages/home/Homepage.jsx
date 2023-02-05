import React from 'react'
import Button from './Button'
import Card from './Card'
import Promo from './Promo'
import data from './data'

const Homepage = () => {
    return (
        <main>
            <h1>Homepage</h1>
            <Promo />
            <Button title="Online Menu" />
            <div className="specials">
                {
                    data.map(item => <Card key={item.id} item={item} />)
                }
            </div>
        </main>
    )
}

export default Homepage