import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';
import styles from "./ProfileInput.module.css";
import Button from "../Button/Button";
import {Link} from "react-router-dom";


const ProfileInput = ({gebruikersnaam, profielEmail }) => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1 className={styles.title}> <AiOutlineUser/> Profielpagina</h1>
                        <p className={styles.text}>Naam:{gebruikersnaam}</p>
                        <p className={styles.text}>Email:{profielEmail}</p>
                        <p className={styles.text}>Naar favorieten:{<Link to="/login-favorite" className={styles.link}> Klik hier</Link>}</p>
                        <Button
                            name="Account verwijderen"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInput;