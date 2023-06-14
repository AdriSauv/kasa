import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-main.png';
import "./style.css";

function Header(){
    return (
        <header className='header'>
            <Link to="/"><img src={logo} className='logo' alt='Logo Kasa' /></Link>
            <nav className='navbar'>
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>Accueil</NavLink>
            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }>A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header