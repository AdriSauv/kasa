import HousingDatas from '../../assets/data/logements.json';
import Error from '../../components/error';
import './style.scss';
import React from 'react';
import { useParams } from 'react-router-dom';


function Housing() {
    const { id } = useParams();
    const data = HousingDatas.find(data => data.id === id);
    if (!data) {
        return <Error />
    }
    return (
        <main>
            <article className='housingDetails'>
                <div className='apartmentDetails'>
                    <h2 className="apartmentTitle">{data.title}</h2>
                    <p className="apartmentLocation">{data.location}</p>
                    <div className="housingTags">

                    </div>
                </div>
            </article>
        </main>
    )
}

export default Housing