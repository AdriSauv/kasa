import { useState } from 'react';
import ratingGrey from "../../assets/pictures/rating-grey.png";
import ratingRed from "../../assets/pictures/rating-red.png";
import "./style.scss";

const Rating = ({ rate }) => {
    const [filledStars, setFilledStars] = useState(rate);

    const renderRatingStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const starClass = i < filledStars ? ratingRed : ratingGrey;
            stars.push(<img src={starClass} alt='rating' key={i} className={starClass} />);
        }
        return stars;
    };

    return (
        <div className='rating' onMouseEnter={() => setFilledStars(rate)} onMouseLeave={() => setFilledStars(rate)}>
            {renderRatingStars()}
        </div>
    );
};

export default Rating;

