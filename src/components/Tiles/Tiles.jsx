import React from 'react';
import {Link} from "react-router-dom";
import styles from './Tiles.module.css'

const Tiles = ({childrenImg, title, src, alt,text, button, type, onClick,LinkTo, children, classNameButton, classNameImg}) => {
    return (
        <>
            <section>
                <article>
                    {childrenImg}
                    <div className={styles.outerContainer}>
                    <div className={styles.div}>
                        <h2 className={styles.h}>{title}</h2>
                        <p className={styles.p}>{text}</p>
                        {children}
                        <Link to={LinkTo}><button className={classNameButton} type={type} onClick={onClick}>{button}</button></Link>
                    </div>
                    <div className={styles.divImg}>
                        <img
                            className={classNameImg}
                            src={src}
                            alt={alt}/>
                    </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Tiles;