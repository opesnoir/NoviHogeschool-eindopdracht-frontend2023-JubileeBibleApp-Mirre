import React from 'react';
import BasicSection from "../../components/BasicSection/BasicSection";
import Image from "../../components/Image/Image";
import Bijbel from "../../assets/home-bible-pexels-johnmark-smith-272337.jpg"

const AboutBible = () => {
    return (
        <>
            <BasicSection
                title="Over de Bijbel"
                paragraph1="De Bijbel is een verzameling van zesenzestig boeken. Het zijn geen losse boeken, maar afgeronde Bijbelgedeelten die ieder een stuk van een groter verhaal vertellen. Te weten het verhaal van de Elohim JHWH (de God van Abraham, Isaak en Jacob) en Zijn plan om de gevallen schepping te redden van de gevolgen van de zondeval."
                paragraph2=" “Heel de Schrift is door God ingegeven en is nuttig om daarmee te onderwijzen, te weerleggen, te verbeteren en op te voeden in de rechtvaardigheid, opdat de mens die God toebehoort, volmaakt zou zijn, tot elk goed werk volkomen toegerust.” - 2 Timoteüs 3:16 en 17"
                name='Jubilee'
            />
            <Image
                src={Bijbel}
                alt="Afbeelding van een Bijbel"
            />
        </>
    );
};

export default AboutBible;