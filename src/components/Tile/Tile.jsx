import React from 'react';
import {Link} from "react-router-dom";

const Tile = ({img, alt, title, text, LinkTo, type, onClick, buttonName, children}) => {
    return (
        <>
            <section>
                {img && <img src={img} alt={alt}/>}
                <h2>{title}</h2>
                <p>{text}</p>
                {<Link to={LinkTo}><button type={type} onClick={onClick}>{buttonName}</button></Link>}
                {children}
            </section>
        </>
    );
};

export default Tile;