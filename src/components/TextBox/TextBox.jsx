import React from 'react';
import styles from './TextBox.module.jsx.css';

const TextBox = ({title, text, children, className}) => {
    return (
        <>
            <div className={className} >
                    <article>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        {children}
                    </article>
                </div>
        </>
    );
};

export default TextBox;