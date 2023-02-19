import React from 'react'

const Confrimation = () => {
    return (
        <main>
            <section className='s1'>
                <h1 className='little'>Little Lemon</h1>
                <h2 className='address'>123 Lane Drive</h2>
                <h2 className='address'>Floor 1 Suite 12</h2>
                <h3 className='address'>Chicago, IL, 60606</h3>
            </section>
            <section className='section s2'>
                <h3><b>Enter your reservation details</b></h3>
            </section>
            <section className='section s3 final'>
                <h1> Your reservation is complete.</h1>
                <h1> Your confirmation number is :
                    <b className='price'>{" " + parseInt(Math.random() * 100000)}</b>
                </h1>
            </section>
        </main>
    )
}

export default Confrimation