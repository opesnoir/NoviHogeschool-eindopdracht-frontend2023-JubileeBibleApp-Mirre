import React from 'react';
import styles from "./Tile.module.css";

const Tile = ({img, alt, title, children, className, classNameP, classNameS, text}) => {
    return (
        <>
            <section className="classNameS">
                {img && <img
                    className={styles.img}
                    src={img}
                    alt={alt}/>}
                <h2 className={className}>{title}</h2>
                <p className={classNameP}>{text}</p>
                {children}
            </section>
        </>
    );
};

export default Tile;