import React from 'react';
import styles from "../../pages/login/Login.module.css";
import {Link} from "react-router-dom";

const BasicIntro = ({children, text1, text2, text3, link, title}) => {
    return (
        <>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <div>
                        <p
                            className={styles.p}>{text1}
                            <Link
                                to={link}
                                className={styles.link}>
                                {text2}
                            </Link>
                            {text3}
                        </p>
                    </div>
                    <div>
                        <h1 className={styles.h1}>{title}</h1>
                    </div>
                    <div className={styles.formOuterContainer}>
                        <div className={styles.formInnerContainer}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BasicIntro;