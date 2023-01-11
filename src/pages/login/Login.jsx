import React, {useState} from 'react';
import Button from "../../components/Button/Button";
import FormInput from "../../components/FormInput/FormInput";
import {useForm} from "react-hook-form";
import styles from "./Login.module.css"
import Image from "../../components/Image/Image";
import lamb from "../../assets/login-lamb-pexels-atahan-demir-11553491 copy.jpg"
import BasicIntro from "../../components/BasicIntro/BasicIntro";

const Login = () => {

    const {register, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <BasicIntro
                text1="Heb je nog geen account? Klik dan"
                text2="hier"
                text3="om je te registreren"
                link="/register"
                title="Inloggen"
            >
                {<form action="">
                    <FormInput
                        id="email"
                        name="email"
                        type="email"
                        role="user"
                        onChange=" "
                        placeholder="Email:"
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
                        onChange=" "
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
                            type="button"
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