import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-main.png';
import "./style.css";

function Header(){
    return (
        <header className='header'>
            <Link to="/"><img src={logo} className='logo' alt='Logo Kasa' /></Link>
        </header>
    )
};

export default Header