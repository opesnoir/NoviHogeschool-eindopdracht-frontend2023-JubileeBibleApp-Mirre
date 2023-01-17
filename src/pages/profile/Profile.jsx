import React from 'react';
import styles from "./Profile.module.css";
import ProfileInput from "../../components/ProfileInput/ProfileInput";
import Image from "../../components/Image/Image";
import JubileeLogo from "../../assets/profile-jubilee-bibleapp-high-resolution-logo-white-on-transparent-background.png"


const Profile = () => {
    // auth toevoegen op een later moment, eerst pagina bouwen


    return (
        <>
            <ProfileInput/>
            <Image
                src={JubileeLogo}
                alt="Jubilee Logo"
            />
        </>
    );
};

export default Profile;