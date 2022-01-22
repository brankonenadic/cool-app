import React from 'react';
import classes from './Card.module.css'

const Card = ({ title, year, image , runtime , genres , director }) => {



    return (
        <div className={classes.cardItem}>
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div className={classes.infoDiv}>
                <h3> {title}</h3>
                <p>{year}</p>
                <p>{runtime} min</p>
                <p>{genres}</p>
                <p>{director}</p>
            </div>
        </div>
    );

};

export default Card;
