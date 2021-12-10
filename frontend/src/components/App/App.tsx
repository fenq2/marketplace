import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import styles from './App.module.scss'
import buttonStyles from '../Button/Button.module.scss'

import { ICardListState, ICardPrev } from '../../types/card'

import { OrderPopup, Button } from '../index'
import { CardList } from '../../containers'

const App: React.FC = () => {
    const cards = useSelector((state: ICardListState) => state.cardList.cards)
    const loading = useSelector(
        (state: ICardListState) => state.cardList.loading
    )
    const [showOrderPopup, setShowOrderPopup] = useState<boolean>(false)
    const [popupOfferCard, setPopupOfferCard] = useState<ICardPrev>({
        name: '',
        category: '',
        price: 0,
    })

    const handleCheapest = () => {
        let price: null | number = null
        cards.forEach((item: ICardPrev): void => {
            !price && (price = item.price)
            item.price < price && (price = item.price)
        })

        const cheapestArray: ICardPrev | undefined = cards.find(
            (item) => item.price === price
        )

        if (cheapestArray) {
            setPopupOfferCard({
                name: cheapestArray.name,
                category: cheapestArray.category,
                price: cheapestArray.price,
            })
            setShowOrderPopup(true)
        }
    }

    return (
        <div className={styles.App}>
            <CardList
                setPopupOfferCard={setPopupOfferCard}
                handleShowPopup={setShowOrderPopup}
            />
            {showOrderPopup && (
                <OrderPopup
                    handleShowPopup={setShowOrderPopup}
                    popupOfferCard={popupOfferCard}
                />
            )}
            {!loading && (
                <div className={styles.AppFooter}>
                    <Button
                        onClick={handleCheapest}
                        mod={buttonStyles.buttonCheapest}
                        text="Buy cheapest"
                    />
                </div>
            )}
        </div>
    )
}

export default App
