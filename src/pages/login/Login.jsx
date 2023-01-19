import React, {useContext, useState} from 'react';
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import {useForm} from "react-hook-form";
import styles from "./Login.module.css"
import Image from "../../components/Image/Image";
import lamb from "../../assets/login-lamb-pexels-atahan-demir-11553491 copy.jpg"
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
    const {login} = useContext(AuthContext);

    const {register, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin',{
                "username": "user",
                "password" : "123456",
            })
            login( response.data.accessToken )
        } catch ( e ) {
            console.error( e )
        }
    }

/*    function handleSubmit(e){
        e.preventDefault();
        login();
    }*/

    return (
        <>
            <BasicIntro
                text1="Heb je nog geen account? Klik dan"
                text2="hier"
                text3="om je te registreren"
                link="/register"
                title="Inloggen"
                introduction="Heb je al een account en wil je favorieten verzen opslaan? Log dan hieronder in op je persoonlijke account."
            >
                {<form onSubmit={handleLogin}>
                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        role="user"
                        onChange={ e => setEmail( e.target.value ) }
                        placeholder="Email:"
                        value = {email}
                        register={register}
                        errors={errors}
                        validationSchema={{
                            required: "Email is vereist",
                            pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Geldig emailadres is vereist"
                            }
                        }}
                        required
                    />
                    <FormInput
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        role="user"
                        value={password}
                        onChange={ e => setPassword( e.target.value ) }
                        placeholder="Wachtwoord:"
                        register={register}
                        errors={errors}
                        validationSchema={{
                            required: {
                                value: true,
                                message: "Wachtwoord is vereist"
                            },
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                message: "Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter, 1 getal en 1 leesteken"
                            },
                            minLength: {
                                value: 8,
                                message: "Voer minimaal 8 tekens in"
                            }
                        }}
                        required
                    />
                    <label>
                        <input
                            className={styles.passwordCheckbox}
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        Wachtwoord tonen
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
                src={lamb}
                alt="Afbeelding van een lam"
            />
        </>
    );
};

export default Login;