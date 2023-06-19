import backgroundhome from '../../assets/pictures/background-home.png'
import backgroundabout from '../../assets/pictures/background-about.png'
import "./style.scss"

function Banner(props){
    if (props.page === 'home') {
        return (
            <section className="banner">
                <div className="bannerContent">
                    <img src={backgroundhome} className='bannerImage' alt='Bord de mer Rocheux'></img>
                    <p className="bannerText">Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    } else if (props.page === 'about') {
        return (
            <section className='bannerAbout'>
                <div className="bannerAboutContent">
                    <img src={backgroundabout} className='bannerAboutImage' alt='Chaine de montagnes'></img>
                </div>
            </section>
        )
    }
}

export default Banner