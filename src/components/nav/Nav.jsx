import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../assets/jubilee-bibleapp-high-resolution-logo-white-on-transparent-background copy.png'
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineUserAdd} from 'react-icons/ai';
import styles from './Nav.module.css';
import {AuthContext} from "../../context/AuthContext";

const Nav = () => {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout()
    }
    const navLink = ({isActive}) => isActive
        ? 'active-link'
        : 'default-link'


    return (
        <>
            <nav>
                <div className={styles.outerContainer}>
                    <ul>
                        <li><NavLink to="/" className={navLink}>Home</NavLink></li>
                        <li><NavLink to="/about" className={navLink}>Over</NavLink></li>
                        <img src={logo} alt="Jubilee BibleApp logo" className={styles.logo}/>
                        <li><NavLink to="/signup" className={navLink} onClick={() => navigate('/signup')}><AiOutlineUserAdd/>Registreer</NavLink></li>
                        <li><NavLink to="/signin" className={navLink}  onClick={() => navigate('/signin')}><AiOutlineUser/>Login</NavLink></li>
                        {isAuth &&
                            <>
                                <li><NavLink to="/login-profile" className={navLink}>Profielpagina</NavLink></li>
                                <li><button type="button" onClick={handleLogout}>Uitloggen</button></li>
                            </>
                        }

                      {/*  {isAuth ?
                            <button type="button" onClick={handleLogout
                            }>
                                Log uit
                            </button>
                            :
                            <div>
                                <button type="button" onClick={() => navigate('/signin')}>
                                    Log in
                                </button>
                                <button type="button" onClick={() => navigate('/signup')}>
                                    Registreren
                                </button>
                            </div>
                        }*/}

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;

