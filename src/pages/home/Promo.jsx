import React from 'react'
import image from "../../assets/restauranfood.jpg"
import "./homepage.css"

const Promo = () => {
    return (
        <div className='main'>
            <section className='promo'>
                <article className='promo1'>
                    <h1>Little Lemon</h1>
                </article>
                <img className="promo2" src={image} alt="food" />
            </section>
        </div>
    )
}

export default Promo