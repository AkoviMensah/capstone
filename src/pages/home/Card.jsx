import './homepage.css'
import { RiMotorbikeFill } from 'react-icons/ri'

const Card = ({ item }) => {
    return (
        <article className="card">
            <img src={item.image} alt={item.name} className="s-image" />
            <div className="card_body">
                <span className='card_price'>
                    <h4>{item.name}</h4>
                    <h4 className="price">{item.price}</h4>
                </span>
                <p className='item_description'>{item.description}</p>
                <span className='icon' >
                    <h5>Order a delivery  <RiMotorbikeFill /></h5>
                </span>
            </div>
        </article>
    )
}

export default Card