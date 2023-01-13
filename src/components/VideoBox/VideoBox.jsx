import React from 'react';
import styles from './VideoBox.module.css'

const VideoBox = ({width, height, src, title, allow,}) => {
    return (
        <>
            <div className={styles.innerContainer}>
            <iframe
                className={styles.frame}
                width={width}
                height={height}
                src={src}
                title={title}
                    allow={allow}
                    allowFullScreen>
            </iframe>
            <article>
                <p className={styles.youtube}>Youtube</p>
                <h5 className={styles.videoTitle}>{title}</h5>
            </article>
            </div>
        </>
    );
};

export default VideoBox;