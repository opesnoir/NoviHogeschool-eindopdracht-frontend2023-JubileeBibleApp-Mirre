// import createContext and useState.
import React, {createContext, useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
/*import nav from "../components/nav/Nav";*/


// context
export const AuthContext = createContext({});

//custom provider component (add the children as property)
function AuthContextProvider({children}) {

    // state
    /*const [isAuth, toggleIsAuth] = useState(false);*/
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending"
    });

    const navigate = useNavigate();

    useEffect(() => {
        // get token from local storage
        const storedToken = localStorage.getItem('token')

        // if token = true get userdata
        if (storedToken) {
            const decodedToken = jwt_decode(storedToken)

            if (Math.floor(Date.now() / 1000) < decodedToken.exp) {
                console.log("gebruiker nog ingelogd")
                void fetchUserData(storedToken, decodedToken.sub)
            } else {
                console.log("token verlopen")
                localStorage.removeItem('token')
            }
        } else {
            // no token
            setAuth({
                ...auth,
                isAuth: false,
                user: null,
                status: "done"
            })
        }
    }, [])

    // login function
    function login(jwt) {
        console.log("gebruiker ingelogd")
        localStorage.setItem('token', jwt)
        const decodedToken = jwt_decode(jwt);

        void fetchUserData(jwt, decodedToken.sub, "/profile")
    }

    async function fetchUserData(jwt, id, redirect) {
        try {
            //test: const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/test/all`)
            // console.log(response);
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                }
            })
            console.log(response);
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    username: response.data.username
                },
                status: "done"
            })
            if (redirect) {
                navigate(redirect)
            }
            console.log(response)
        } catch (e) {
            console.error(e)
            setAuth({
                ...auth,
                status: "done"
            })
        }
    }

    // logout function
    function logout() {
        console.log("gebruiker uitgelogd")
        localStorage.removeItem('token')
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: "done"
        })
        navigate("/login")
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
            {auth.status === "done" ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;






