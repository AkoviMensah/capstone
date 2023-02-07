import React from 'react'
import Button from './Button'
import Card from './Card'
import Promo from './Promo'
import data from './data'
import "./homepage.css"

const Homepage = () => {
    return (
        <main>
            <Promo />
            <section className='section2'>
                <h1>This weeks specials!</h1>
                <Button>Online Menu</Button>
            </section>
            <section className="specials">
                {
                    data.map(item => <Card key={item.id} item={item} />)
                }
            </section>
        </main>
    )
}

export default Homepage