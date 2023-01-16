import React from 'react';
import schaap from '../../assets/about-sheep-pexels-arthur-swiffen-12550240 copy.jpg'
import Image from '../../components/Image/Image';
import BasicSection from "../../components/BasicSection/BasicSection";
import VideoBox from "../../components/VideoBox/VideoBox";
import DailyVerse from "../../components/DailyVerse/DailyVerse";


const About = () => {
    return (
        <>
            <BasicSection
                title="Over mij"
                paragraph1="“Uw woord is een lamp voor mijn voet, en een licht op mijn pad.”
                                (Psalm 119:105). Dat
                                schreef David om het woord van de HEERE te omschrijven. Voor mij betekent Gods woord
                                hetzelfde. Daarom heb ik ervoor gekozen voor mijn afstudeer opdracht deze
                                Bijbelapplicatie te bouwen."
                paragraph2="Mijn geloof in JHWH vormt het fundament van mijn bestaan en Zijn
                                woord is mijn morele
                                kompas. Ik hoop dan ook dat de Bijbel jou net zo zal inspireren en dat het een licht
                                voor jouw voeten mag zijn."
                name="Mirre"
            />
            <Image
                src={schaap}
                alt="Afbeelding van een schaap"
            />
        </>
    );
};

export default About;