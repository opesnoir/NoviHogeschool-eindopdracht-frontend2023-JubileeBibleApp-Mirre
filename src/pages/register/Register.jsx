import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import BasicIntro from "../../components/BasicIntro/BasicIntro";
import FormInput from "../../components/FormInput/FormInput";
import styles from "../login/Login.module.css";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import schapen from "../../assets/register-schapen-pexels-trinity-kubassek-288621 (1) copy.jpg";

const Register = () => {
    const {register, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <BasicIntro
                text1="Heb je al een account? Klik dan"
                text2="hier"
                text3="om in te loggen"
                link="/login"
                title="Registreer"
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
                src={schapen}
                alt="Afbeelding van schapen"
            />
        </>
    );
};


export default Register;