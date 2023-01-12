import React from 'react';
import styles from "../FormInput/FormInput.module.css";

const SearchFormInput = ({htmlFor, children, type, id, name, role, event, placeholder}) => {
    return (
        <>
            <div className={styles.label}>
                <label htmlFor={htmlFor}>
                    {children}
                </label>
                <input
                    type={type}
                    id={id}
                    name={name}
                    role={role}
                    onChange={event}
                    placeholder={placeholder}
                />
                {children}
            </div>
        </>
    );
};

export default SearchFormInput;