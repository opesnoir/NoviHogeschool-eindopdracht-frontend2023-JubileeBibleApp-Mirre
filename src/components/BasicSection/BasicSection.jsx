import React from 'react';
import styles from "./BasicSection.module.css"

const BasicSection = ({title, paragraph1, paragraph2,  name, children}) => {
    return (
            <section>
                <article className={styles.outerContainer}>
                    <div className={styles.innerContainer}>
                        <div>
                            <h1 className={styles.title}>{title}</h1>
                        </div>
                        <div>
                            <p className={styles.p}>{paragraph1}</p>
                            <p className={styles.p}>{paragraph2}</p>
                            {children}
                            <p className={styles.name}>{name}</p>
                        </div>
                    </div>
                </article>
            </section>
    );
};

export default BasicSection;