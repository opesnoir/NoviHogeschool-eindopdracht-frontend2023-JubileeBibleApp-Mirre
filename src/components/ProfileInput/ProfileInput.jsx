import React from 'react';
import {AiOutlineUser} from 'react-icons/ai';


const ProfileInput = ({gebruikersnaam, profielEmail }) => {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>Profielpagina</h1>
                        <AiOutlineUser/>
                        <p>Naam:{gebruikersnaam}</p>
                        <p>Email:{profielEmail}</p>
                        <button>Account verwijderen</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileInput;