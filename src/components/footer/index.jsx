import logo from '../../assets/images/logo-footer.png';
import "./style.scss";

function Footer(){
    return (
        <footer className='footer'>
            <img src={logo} className='logoFooter' alt='Kasa logo'></img>
            <p className='footerRights'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer