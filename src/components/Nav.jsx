import "../App.css"
const Nav = () => {
    const items = [
        { name: "Home", url: "#" },
        { name: "About", url: "#" },
        { name: "Menu", url: "#" },
        { name: "Reservations", url: "#" },
        { name: "Order Online", url: "#" },
        { name: "Login", url: "#" }
    ];
    return (
        <nav className="nav">
            <ul>{
                items.map((item) => <li key={item.name}>
                    <a href={item.url}>{item.name}</a>
                </li>)
            }</ul>
        </nav>
    )
}

export default Nav