import React from 'react';
import classes from './Card.module.css'

const Card = ({ id, title, year, image }) => {
    return (
        <div className={classes.cardItem}>
            <div className={classes.image} style={{ backgroundImage: `url(${image})` }}></div>
            <div> {id}</div>
            <h2> {title}</h2>
            <p>{year}</p>
        </div>
    );

};

export default Card;
