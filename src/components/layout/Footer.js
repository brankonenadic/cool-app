import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footer}>
        <div className={classes.socialMedia}>
            <a rel="noreferrer" href="https://www.instagram.com/_lanin__tata_" target="_blank">
            <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a rel="noreferrer" href="https://www.facebook.com/branko.nenadic.33/" target="_blank">
            <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/branko-nenadic-6950051a9" target="_blank">
            <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a rel="noreferrer" href="https://github.com/brankonenadic" target="_blank">
            <i className="fab fa-github fa-lg"></i>
            </a>
            <a rel="noreferrer" href="mailto: lanintata.drv@gmail.com" target="_blank">
            <i className="far fa-envelope fa-lg"></i>
            </a>
        </div>
        <p> &copy; 2021 LaninTata</p>
    </div>
    )
}

export default Footer
