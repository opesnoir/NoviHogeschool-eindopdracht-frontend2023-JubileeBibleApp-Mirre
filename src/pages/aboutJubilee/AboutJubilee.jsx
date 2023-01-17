import React from 'react';
import styles from './AboutJubilee.module.css';
import BasicSection from "../../components/BasicSection/BasicSection";
import ram2 from "../../assets/profile2-aboutjubilee-ram-pexels-david-selbert-7465130.jpg";
import Image from "../../components/Image/Image";

const AboutJubilee = () => {
    return (
        <>
            <BasicSection
                title="Over Jubilee BibleApp"
                paragraph1= "“Houd aan in het lezen, in het vermanen, in het leren, totdat ik kome.”
                                (1 Timotheüs 4:13). Dat
                                schreef Timotheus over het lezen van het woord van de HEERE. "
                paragraph2="Jubilee BibleApp stelt de Bijbel beschikbaar in 40 vertalingen, zodat een ieder die dat wil de Bijbel kan lezen en zo kan leren over Gods woord."
                name="Jubilee"
            />
            <Image
            src={ram2}
            alt="Ram"
            />

        </>
    );
};

export default AboutJubilee;