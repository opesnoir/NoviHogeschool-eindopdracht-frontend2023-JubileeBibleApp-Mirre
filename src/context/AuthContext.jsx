// import createContext and useState.
import React, { createContext, useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
/*import nav from "../components/nav/Nav";*/


// context
export const AuthContext = createContext({});

//custom provider component (add the children as property)
function AuthContextProvider({ children }) {

    // state
    /*const [isAuth, toggleIsAuth] = useState(false);*/
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    const navigate = useNavigate();

    useEffect( () => {
        // haal de JWT op uit Local Storage
        const storedToken = localStorage.getItem( 'token' )


        // if token get userdata
        if ( storedToken ) {
            const decodedToken = jwt_decode( storedToken )

            if ( Math.floor( Date.now() / 1000 ) < decodedToken.exp ) {
                console.log( "De gebruiker is NOG STEEDS ingelogd 🔓" )
                void fetchUserData( storedToken, decodedToken.sub )
            } else  {
                console.log( "De token is verlopen" )
                localStorage.removeItem( 'token' )
            }
        } else {
            // no token
            setAuth( {
                ...auth,
                isAuth: false,
                user: null,
                status: "done"
            } )
        }
    }, [] )

    // login function
    function login( jwt ) {
        console.log( "Gebruiker ingelogd" )
        localStorage.setItem( 'token', jwt )
        const decodedToken = jwt_decode( jwt );

        void fetchUserData( jwt, decodedToken.sub, "/profile" )
    }

    async function fetchUserData( jwt, id, redirect ) {
        try {
            const response = await axios.get( `http://localhost:3000/600/users/${ id }`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ jwt }`,
                }
            } )
            setAuth( {
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    username: response.data.username
                },
                status: "done"
            } )
            if ( redirect ) {
                navigate( redirect )
            }
            console.log( response )
        } catch ( e ) {
            console.error( e )
            setAuth( {
                ...auth,
                status: "done"
            } )
        }
    }

    // logout function
    function logout() {
        console.log( "De gebruiker is uitgelogd" )
        localStorage.removeItem( 'token' )
        setAuth( {
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        } )
        navigate( "/login" )
    }

    // data-object (add to the AuthContext.Provider component as value).
    // auth is an object with 3 object-keys (isAuth, user, status).
    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        status: auth.status,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            { auth.status === "done" ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;






