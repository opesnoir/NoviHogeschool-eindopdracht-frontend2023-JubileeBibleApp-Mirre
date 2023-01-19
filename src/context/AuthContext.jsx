// import createContext and useState.
import React, { createContext, useState } from 'react';
import {useNavigate} from "react-router-dom";

// context
export const AuthContext = createContext({});

//custom provider component (add the children as property)
function AuthContextProvider({ children }) {

    // state
    /*const [isAuth, toggleIsAuth] = useState(false);*/
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
    });

    const navigate = useNavigate();

    // login function
    function login() {
        console.log('Gebruiker ingelogd!');
        toggleIsAuth(true);
        navigate('/profile');
    }

    // logout function
    function logout() {
        console.log('Gebruiker uitgelogd!');
        toggleIsAuth(false);
        navigate('/');
    }

    // data-object (add to the AuthContext.Provider component as value).
    // isAuth is an object with 2 object-keys (isAuth and user).
    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
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






