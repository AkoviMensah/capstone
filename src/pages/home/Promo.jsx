import React from 'react'
import image from "../../assets/restauranfood.jpg"
import Button from './Button'
import "./homepage.css"

const Promo = () => {
    return (
        <div className='main'>
            <section className='promo'>
                <article className='promo1'>
                    <h1 className='name'>Little Lemon</h1>
                    <h2 className='city'>Chicago</h2>
                    <p className='littlelemon'>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist</p>
                    <Button>Reserve a table</Button>
                </article>
                <img className="promo2" src={image} alt="food" />
            </section>
        </div>
    )
}

export default Promo