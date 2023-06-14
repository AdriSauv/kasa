import backgroundhome from '../../assets/images/background-home.png'
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
    }
}

export default Banner