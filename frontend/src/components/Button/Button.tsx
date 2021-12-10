import React from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

interface IButton {
    text: string;
    onClick?: () => void;
    mod?: string;
    icon?: () => JSX.Element;
    isLoading?: boolean;
}

const Button: React.FC<IButton> = ({ text, onClick, mod, icon, isLoading }) => {
    return (
        <button
            disabled={isLoading}
            onClick={onClick}
            type="button"
            className={classnames(`${styles.button}`, mod)}
        >
            {text}
            {icon && <div className={styles.buttonArrow}>{icon()}</div>}
        </button>
    )
}

export default Button
