import React from 'react';
import styles from "./FormInput.module.css";

const FormInput = ({
                      htmlFor,
                      label,
                      required,
                      type,
                      id,
                      name,
                      role,
                      event,
                      placeholder,
                      validationSchema,
                      register,
                      errors
                  }) => {

    return (
        <>
            <div className={styles.label}>
                <label htmlFor={htmlFor}>
                    {label}
                    {required}
                </label>
                <input className={styles.inputtekst}
                    type={type}
                    id={id}
                    name={name}
                    role={role}
                    onChange={event}
                    placeholder={placeholder}
                    {...register(name, validationSchema)}
                />
                {errors && errors[name]?.type === "required" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message} </span>
                )}
                {errors && errors[name]?.type === "pattern" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message} </span>
                )}
                {errors && errors[name]?.type === "minLength" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message} </span>
                )}
            </div>
        </>
    );
};

export default FormInput;