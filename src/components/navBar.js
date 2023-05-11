import logo from '../assets/logo.svg'

import '../styles/navbar.css'

export default function NavBar(){
    return(
        <header>
            <nav className="main-navbar">
                <img src={logo} alt="" />
                <h3>my travel journal.</h3>
            </nav>
        </header>
        )
}