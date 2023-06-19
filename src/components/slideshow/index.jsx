import { useState } from 'react';
import arrowPrev from '../../assets/pictures/arrow-prev.png';
import arrowNext from '../../assets/pictures/arrow-next.png';
import styles from './style.scss';

function Slideshow({pictures, picturesLength}) {
    const [index, setIndex] = useState(0);
    const nextImg = (index) => {
        index < picturesLength - 1 ? setIndex(index + 1) : setIndex((index = 0))
    };
    const prevImg = (index) => {
        index > 0 ? setIndex(index - 1) : setIndex((index = pictures.length - 1))
    };
}