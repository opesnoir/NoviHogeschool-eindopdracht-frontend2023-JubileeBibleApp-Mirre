import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// BrowserRouter import
import {BrowserRouter as Router} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
// router for the routes, authcontextprovider voor the authentication

// 4. wrap the context-component around the App-component (for steps 1, 2, 3 etc. see AuthContext.jsx)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <AuthContextProvider>
            <App/>
            </AuthContextProvider>
        </Router>
    </React.StrictMode>
);
