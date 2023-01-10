import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../../assets/jubilee-bibleapp-high-resolution-logo-white-on-transparent-background copy.png'
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineUserAdd} from 'react-icons/ai';
import styles from './Nav.module.css';

const Nav = ({auth}) => {

    const navLink = ({isActive}) => isActive
        ? 'active-link'
        : 'default-link'

    return (
        <>
            <nav>
                <div className={styles.outerContainer}>
                <ul>
                    <li><NavLink to="/" className={navLink}>Home</NavLink></li>
                    <li><NavLink to="/about" className={navLink}>Over</NavLink></li>
                    <img src={logo} alt="Jubilee BibleApp logo" className={styles.logo}/>
                    <li><NavLink to="/register" className={navLink}><AiOutlineUserAdd/>Registreer</NavLink></li>
                    <li><NavLink to="/login" className={navLink}><AiOutlineUser/>Login</NavLink></li>
                    {auth && <li><NavLink to="/login-profile" className={navLink}>Profielpagina</NavLink></li>}
                </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;