import React from 'react'
import classnames from 'classnames'

import styles from './Input.module.scss'

interface IInputProps {
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
    validateText: string | null;
    type: string;
    placeholder: string;
    name: string;
}

const Input: React.FC<IInputProps> = ({
    name,
    onBlur,
    onChange,
    type,
    placeholder,
    validateText,
}) => {
    return (
        <div
            className={classnames(
                styles.input,
                { [styles.inputError]: validateText },
                { [styles.inputSuccess]: validateText === null }
            )}
        >
            <input
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                type={type}
                className={styles.inputItem}
                placeholder={placeholder}
            />
            {validateText && (
                <span className={styles.inputLabel}>{validateText}</span>
            )}
        </div>
    )
}

export default Input
