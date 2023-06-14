import { Link } from 'react-router-dom';
import "./style.scss";

function Error(){
    return (
        <main>
            <div className="errorContainer">
                <p className="error404">404</p>
                <p className="errorMessage">Oups! La page que vous demandez n'existe pas.</p>
                <Link className='homeLink' to="/">Retourner sur la page d'accueil</Link>
            </div>
        </main>
    )
};

export default Error