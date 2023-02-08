import React from 'react'
import image from "../../assets/restauranfood.jpg"
import Button from './Button'
import "./homepage.css"
import { Link } from 'react-router-dom';

const Promo = () => {
    return (
        <section className='main'>
            <section className='section promo'>
                <article className='promo1'>
                    <h1 className='name'>Little Lemon</h1>
                    <h2 className='city'>Chicago</h2>
                    <p className='littlelemon'>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist</p>
                    <Link to="/book">
                        <Button>Reserve a table</Button>
                    </Link>
                </article>
                <img className="promo2" src={image} alt="food" />
            </section>
        </section>
    )
}

export default Promo