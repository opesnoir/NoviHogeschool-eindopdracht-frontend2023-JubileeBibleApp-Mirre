import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Tile.module.css";

const Tile = ({img, alt, title, text, LinkTo, type, onClick, buttonName, children}) => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.div}>
                <article className={styles.article}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.p}>{text}</p>
                {children}
                </article>
                </div>
            </section>
        </>
    );
};

export default Tile;