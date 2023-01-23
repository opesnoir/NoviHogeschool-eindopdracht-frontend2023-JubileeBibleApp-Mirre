import React from 'react';
import styles from "./Button.module.css"

const Button = ({type, children, name}) => {
    return (
        <div className={styles.container}>
            <button
                type={type}
                className={styles.button}>
                {name}{children}
            </button>
        </div>
    );
};

export default Button;
