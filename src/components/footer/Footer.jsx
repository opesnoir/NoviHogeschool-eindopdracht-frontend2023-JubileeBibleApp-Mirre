import React from 'react';
import {Link} from "react-router-dom";
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FaTwitter} from 'react-icons/fa';
import {FaPinterest} from "react-icons/fa";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div>
                    <p className={styles.p}>Meer informatie:</p>
                    <Link to="/about" className={styles.link} >Jubilee BibleApp</Link>
                </div>
                <div className={styles.icons}>
                    <p>Bezoek: <FiFacebook/> <FiInstagram/> <FaTwitter/> <FaPinterest/>  </p>
                    <p className={styles.copyright}>&copy; 2023</p>
                </div>
            </div>
        </>
    );
};

export default Footer;