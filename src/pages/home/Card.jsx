

const Card = ({ item }) => {
    return (
        <article className="card">
            <img src={item.image} alt={item.name} className="s-image" />
            <span>
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
            </span>
            <p>{item.description}</p>
            <span>
                {
                    <h6>Order a delivery</h6>
                }
            </span>
        </article>
    )
}

export default Card