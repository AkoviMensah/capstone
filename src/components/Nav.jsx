
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
        <nav>
            <ul>{
                items.map((item) => <li key={item.name}>
                    {item.name}
                </li>)
            }</ul>
        </nav>
    )
}

export default Nav