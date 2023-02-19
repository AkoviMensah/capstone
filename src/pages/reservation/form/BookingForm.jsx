import React, { useState, useEffect } from 'react'
import './bookingForm.css'
import './bookingForm.css'
import validate from './validate';
import { submitAPI } from '../../../api/api';
import { useNavigate } from 'react-router-dom';


const BookingForm = ({ state, dispatch }) => {
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0]
    const [date, setDate] = useState(today);
    const [time, setTime] = useState(state[0]);
    const [numberOfGuests, setNumberOfGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if (!validate.count(numberOfGuests)) setDisabled(true)
        else setDisabled(false)
    }, [numberOfGuests])


    const handleChangeDate = (e) => {
        setDate(e.target.value)
        dispatch({ type: "SETTIMES", payload: date })
        setTime(state[0])
    }

    const handleChangeCount = (e) => {
        setNumberOfGuests(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form_data = { date, time, numberOfGuests, occasion }
        const result = submitAPI(form_data)
        if (result) navigate('/confirmation')
    }


    return (
        <form className='booking_form' onSubmit={handleSubmit}>
            <article className='info' >
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} min={today}
                    onChange={handleChangeDate} />
                <p className='message'></p>
            </article>
            <article className='info'>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => { setTime(e.target.value) }} >
                    {
                        state ? state.map(item => <option key={item}>
                            {item}
                        </option>) : <option>NO AVAILABILITY</option>
                    }
                </select>
                {(time === "NO AVAILABILITY") && <p className='message'>Required</p>}

            </article>

            <article className='info'>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10"
                    id="guests" value={numberOfGuests}
                    onChange={handleChangeCount} />
                {!validate.count(numberOfGuests) && <p className='message'>Required. Should be between 1 and 10</p>}
            </article>
            <article className='info'>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion}
                    onChange={(e) => setOccasion(e.target.value)} >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <p className='message'></p>
            </article>

            <button type='submit' className="reservenow" id='submitBtn'
                disabled={disabled} >
                Make Your reservation
            </button>
        </form>
    )
}

export default BookingForm