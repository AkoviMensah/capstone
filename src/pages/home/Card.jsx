import './homepage.css'

const Card = ({ item }) => {
    return (
        <article className="card">
            <img src={item.image} alt={item.name} className="s-image" />
            <div className="card_body">
                <span className='card_price'>
                    <h4>{item.name}</h4>
                    <h4 className="price">{item.price}</h4>
                </span>
                <p>{item.description}</p>
                <span>
                    {
                        <h6>Order a delivery</h6>
                    }
                </span>
            </div>
        </article>
    )
}

export default Card