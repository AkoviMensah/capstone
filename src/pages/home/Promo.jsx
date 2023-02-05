import React from 'react'
import image from "../../assets/restauranfood.jpg"

const Promo = () => {
    return (
        <section className='promo'>
            <article className='promo1'>
                <h1>Little Lemon</h1>
            </article>
            <img src={image} alt="food" />
        </section>
    )
}

export default Promo