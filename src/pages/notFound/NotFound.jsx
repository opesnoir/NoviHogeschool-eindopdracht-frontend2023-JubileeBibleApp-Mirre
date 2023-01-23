import React from 'react';
import BasicSection from "../../components/BasicSection/BasicSection";
import Image from "../../components/Image/Image";
import ram from "../../assets/pagenotfound-ram-pexels-johannes-havn-3218340 copy.jpg";
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate();
    setTimeout(() => {
        navigate(-1)
    }, 3000)

    return (
        <>
            <BasicSection
                title="404 | Pagina niet gevonden"
                paragraph2="De pagina die je zoekt bestaat niet. Je wordt binnen 3 seconden teruggestuurd naar de vorige pagina"
            />
            <Image
                src={ram}
                alt="Afbeelding van een ram"
            />
        </>
    );
};

export default NotFound;