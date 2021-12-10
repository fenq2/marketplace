import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './CardList.module.scss'
import { getCardsAsync } from './CardList.actions'

import { ICardList, ICardListState } from '../../types/card'

import { CardPrev } from '../../components/index'

const CardList: React.FC<ICardList> = ({
    handleShowPopup,
    setPopupOfferCard,
}) => {
    const dispatch = useDispatch()
    const cards = useSelector((state: ICardListState) => state.cardList.cards)
    const loading = useSelector(
        (state: ICardListState) => state.cardList.loading
    )

    useEffect(() => {
        dispatch(getCardsAsync())
    }, [dispatch])

    return (
        <div className={styles.cardList}>
            {!loading ? (
                cards.map((e) => (
                    <CardPrev
                        key={e.name}
                        category={e.category}
                        name={e.name}
                        price={e.price}
                        handleShowPopup={handleShowPopup}
                        setPopupOfferCard={setPopupOfferCard}
                    />
                ))
            ) : (
                <>
                    <Skeleton duration={2} width={352} height={256} />
                    <Skeleton duration={2} width={352} height={256} />
                    <Skeleton duration={2} width={352} height={256} />
                    <Skeleton duration={2} width={352} height={256} />
                    <Skeleton duration={2} width={352} height={256} />
                    <Skeleton duration={2} width={352} height={256} />
                </>
            )}
        </div>
    )
}

export default CardList
