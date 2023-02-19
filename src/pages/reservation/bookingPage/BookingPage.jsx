import React, { useReducer } from 'react'
import BookingForm from '../form/BookingForm'

import './bookingPage.css'
import { initializeTimes, updateTimes } from './reducer'

const BookingPage = () => {
    const today = new Date().toISOString().split('T')[0]
    const [state, dispatch] = useReducer(updateTimes, initializeTimes(today))

    return (
        <main>
            <section className='s1'>
                <h1 className='little'>Little Lemon</h1>
                <h2 className='address'>123 Lane Drive</h2>
                <h2 className='address'>Floor 1 Suite 12</h2>
                <h3 className='address'>Chicago, IL, 60606</h3>
            </section>
            <section className='section s2'>
                <h1>Book Now</h1>
            </section>
            <section className='section s3'>
                <BookingForm state={state} dispatch={dispatch} />
            </section>
        </main>
    )
}

export default BookingPage