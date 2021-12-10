import React from 'react'
import styles from './CardPrev.module.scss'

import { ICardPrev } from '../../types/card'

import { Button } from '../index'

export interface ICardPrevProps extends ICardPrev {
    handleShowPopup: (args: boolean) => void;
    setPopupOfferCard: (args: ICardPrev) => void;
}

const CardPrev: React.FC<ICardPrevProps> = ({
    category,
    name,
    price,
    handleShowPopup,
    setPopupOfferCard,
}) => {
    const handleClickButton = () => {
        handleShowPopup(true)
        setPopupOfferCard({ name, category, price })
    }

    return (
        <div className={styles.cardPrev}>
            <span className={styles.cardPrevCategory}>{category}</span>
            <h4 className={styles.cardPrevTitle}>{name}</h4>
            <div className={styles.cardPrevFooter}>
                <span className={styles.cardPrevPrice}>
                    <span className={styles.cardPrevCurrency}>$</span> {price}
                </span>
                <Button onClick={handleClickButton} text="Buy" />
            </div>
        </div>
    )
}

export default CardPrev
