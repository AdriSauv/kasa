import styles from './styles.module.scss'
import { useState } from "react"
import arrow from '../../assets/pictures/arrow-down.png'


function Collapse({ collapseTitle, collapseDescription }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const collapseTitleClass = isOpen ? styles.collapse_title_open : styles.collapse_title_closed;
    const arrowClass = isOpen ? styles.arrow_up : styles.arrow_down;
    const collapseDescriptionClass = isOpen ? `${styles.collapse_description} ${styles.collapse_description_open}` : styles.collapse_description;

    return (
        <div className={styles.collapse_container}>
            <div onClick={toggleCollapse} className={collapseTitleClass}>
                {collapseTitle}
                <img src={arrow} className={arrowClass} alt='deployer' />
            </div>
            {isOpen && (
                <div className={collapseDescriptionClass}>
                    <div>{collapseDescription}</div>
                </div>
            )}
        </div>
    );
}




export default Collapse