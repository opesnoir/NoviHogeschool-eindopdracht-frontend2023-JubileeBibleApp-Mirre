import React from 'react';
import styles from './Image.module.css';

const Image = ({src, alt}) => {
    return (
        <div>
            <img src={src} alt={alt} className={styles.img}/>
        </div>
    );
};

export default Image;
