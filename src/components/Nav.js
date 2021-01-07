import '../style.css'

export default function Nav () {
    return (
        <section className="nav">
            <nav id="nav">
                <h1 className="logo">Speed Reader</h1>
                <ul className="nav-links">
                    <li className="nav-link">Services</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </nav>
        </section>
    )
}