import "../App.css"
const Nav = () => {
    const items = [
        { name: "Home", url: "/" },
        { name: "About", url: "#" },
        { name: "Menu", url: "#" },
        { name: "Reservations", url: "/book" },
        { name: "Order Online", url: "#" },
        { name: "Login", url: "#" }
    ];
    return (
        <nav className="nav">
            <ul>{
                items.map((item) => <li key={item.name}>
                    <a href={item.url}><h5>{item.name}</h5></a>
                </li>)
            }</ul>
        </nav>
    )
}

export default Nav