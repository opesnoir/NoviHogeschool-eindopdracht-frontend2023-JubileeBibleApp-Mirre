// import createContext and useState.
import React, { createContext, useState } from 'react';
import {useNavigate} from "react-router-dom";

// context
export const AuthContext = createContext({});

//custom provider component (add the children as property)
function AuthContextProvider({ children }) {

    // state
    const [isAuth, toggleIsAuth] = useState(false);
    const navigate = useNavigate();

    // login function
    function login() {
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth(true);
        navigate('/profile');
    }

    // logout function
    function logout() {
        console.log('Gebruiker is uitgelogd!');
        toggleIsAuth(false);
        navigate('/');
    }

    // data-object (add to the AuthContext.Provider component as value)
    const contextData = {
        isAuth: isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;






