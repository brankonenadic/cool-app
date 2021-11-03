import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    const closeNav = () => {
        setToggleMenu(false);
    };
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className={classes.list}>
                    <li className={classes.items}>
                        <NavLink to="/home" activeClassName={classes.active} className={classes.link} onClick={closeNav}>Home</NavLink>
                    </li>
                    <li className={classes.items}>Services</li>
                    <li className={classes.items}>Contact</li>

                </ul>
            )}

            <button onClick={toggleNav} className={classes.btn}><i className="fas fa-bars fa-2x"></i></button>
        </nav>
    )
}

export default Navbar
