import React from 'react';
import styles from "../Tiles/Tiles.module.css";
import {Link} from "react-router-dom";

const TilesMirror = ({childrenImg, title, src, alt,text, button, type, onClick,LinkTo, children, classNameButton, classNameImg}) => {
    return (
        <>
            <section>
                <article>
                    {childrenImg}
                    <div className={styles.outerContainer}>
                        <div className={styles.divImg}>
                            <img
                                className={classNameImg}
                                src={src}
                                alt={alt}/>
                        </div>
                        <div className={styles.div}>
                            <h2 className={styles.h}>{title}</h2>
                            <p className={styles.p}>{text}</p>
                            {children}
                            <Link to={LinkTo}><button className={classNameButton} type={type} onClick={onClick}>{button}</button></Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    );
};

export default TilesMirror;