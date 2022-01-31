import React, { useState } from 'react';
import classes from './Card.module.css'

const Card = ({ id, title, year, image, runtime, genres, director, actors, plot }) => {

    const [seeMore, setSeeMore] = useState(false)
    const seeMoreHandler = () => {
        setSeeMore(!seeMore)
    }
    let buttonText;
    if (!seeMore) {
        buttonText = 'See more';
    } else {
        buttonText = 'See less';
    }
    return (
        <div className={classes.cardWrapper}>
            <div className={classes.cardItem} style={{ backgroundImage: `url(${image})` }}>
                <button className={classes.seeMoreBtn} id={id} onClick={seeMoreHandler}>{buttonText}</button>
            </div>

            {seeMore && <div className={classes.infoDiv}>
                <h3> {title}</h3>
                <p>{year}</p>
                <p>{runtime} min</p>
                <p>{genres}</p>
                <p>{director}</p>
                <p>{actors}</p>
                <p>{plot}</p>
            </div>}

        </div>
    );

};

export default Card;
