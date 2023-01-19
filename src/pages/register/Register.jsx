import React, {useRef, useState, useContext} from 'react';
import {useForm} from "react-hook-form";
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import FormInput from "../../components/FormInput/FormInput";
import styles from "../login/Login.module.css";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import schapen from "../../assets/register-schapen-pexels-trinity-kubassek-288621 (1) copy.jpg";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const Register = () => {
    const {register, watch, formState: {errors}} = useForm();
    const userPassword = useRef({}) // returns current
    userPassword.current = watch("password", " ");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [email, setEmail] = useState(" ")
    const [username, setUsername] = useState(" ")
    const [password, setPassword] = useState(" ")

    // context
    const {login} =useContext(AuthContext)

    // form submission call
    function handleSubmit(event) {
        event.preventDefault()
        // void registerUser()
    }

/*    //send Post request (JSON methode)
    axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {name, email, password})
        .then((response) => {
            localStorage.setItem('formData', JSON.stringify({name, email, password}));
        })
        .catch((error) => {
            console.log(error);
        });*/

    async function registerUser(e) {
        e.preventDefault()
        console.log( "Gebruiker geregistreerd" )
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',{
                email: email,
                username: username,
                password: password,
            })
            console.log(response);
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }

    return (
        <>
            <BasicIntro
                text1="Heb je al een account? Klik dan"
                text2="hier"
                text3="om in te loggen"
                link="/login"
                title="Registreer"
                introduction="Wil je favorieten verzen opslaan? Registreer dan hieronder je persoonlijke Jubilee account."
            >


                {<form onSubmit={registerUser}>
                    <label>
                        Email:
                        <input type="email" value={ email } onChange={ event => setEmail( event.target.value ) }/>
                    </label>
                    <label>
                        Username:
                        <input type="username" value={ username } onChange={ event => setUsername( event.target.value ) }/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={ password }  onChange={ event => setPassword( event.target.value ) }/>
                    </label>
                    {/*<FormInput*/}
                    {/*    id="name"*/}
                    {/*    name="name"*/}
                    {/*    type="text"*/}
                    {/*    role="user"*/}
                    {/*    value={username}*/}
                    {/*    onChange={event => setUsername(event.target.value)}*/}
                    {/*    placeholder="Naam:"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    validationSchema={{*/}
                    {/*        required: "Naam is vereist"*/}
                    {/*    }}*/}
                    {/*    required*/}
                    {/*/>*/}

                    {/*<FormInput*/}
                    {/*    id="email"*/}
                    {/*    name="email"*/}
                    {/*    type="email"*/}
                    {/*    role="user"*/}
                    {/*    value={email}*/}
                    {/*    onChange={event => setEmail(event.target.value)}*/}
                    {/*    placeholder="Email:"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    validationSchema={{*/}
                    {/*        required: "Email is vereist", pattern: {*/}
                    {/*            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,*/}
                    {/*            message: "Geldig emailadres is vereist"*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    required*/}
                    {/*/>*/}

                    {/*<FormInput*/}
                    {/*    id="password"*/}
                    {/*    name="password"*/}
                    {/*    type={showPassword ? "text" : "password"}*/}
                    {/*    role="user"*/}
                    {/*    value={password}*/}
                    {/*    onChange={event => setPassword(event.target.value)}*/}
                    {/*    placeholder="Wachtwoord:"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    validationSchema={{*/}
                    {/*        required: {*/}
                    {/*            value: true, message: "Wachtwoord is vereist"*/}
                    {/*        }, pattern: {*/}
                    {/*            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,*/}
                    {/*            message: "Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter, 1 getal en 1 leesteken"*/}
                    {/*        }, minLength: {*/}
                    {/*            value: 8, message: "Voer minimaal 8 tekens in"*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    required*/}
                    {/*/>*/}

                    <label>
                        <input
                            className={styles.passwordCheckbox}
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Wachtwoord tonen
                    </label>

                    {/*<FormInput*/}
                    {/*    id="confirmpassword"*/}
                    {/*    name="confirmpassword"*/}
                    {/*    type={showConfirmPassword ? "text" : "password"}*/}
                    {/*    role="user"*/}
                    {/*    placeholder="Bevestig het wachtwoord:"*/}
                    {/*    register={register}*/}
                    {/*    errors={errors}*/}
                    {/*    validationSchema={{*/}
                    {/*        required: {*/}
                    {/*            value: true, message: "Bevestiging is vereist"*/}
                    {/*        }, validate: value => value === password.current,*/}
                    {/*    }}*/}
                    {/*    required*/}
                    {/*/>*/}

                    <label>
                        <input
                            className={styles.passwordCheckbox}
                            type="checkbox"
                            checked={showConfirmPassword}
                            onChange={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                        Bevestiging tonen
                    </label>

                    <div>
                        <Button
                            type="submit"
                            name="Inloggen"
                        />
                    </div>
                </form>}

            </BasicIntro>
            <Image
                src={schapen}
                alt="Afbeelding van schapen"
            />
        </>
    );
};


export default Register;