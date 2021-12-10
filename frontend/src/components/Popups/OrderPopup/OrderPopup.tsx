import React, { useState } from 'react';
import popupStyles from './../Popups.module.scss';

import { IPopupOffer } from '../../../types/popup';

import { OrderForm } from '../../index';
import { CloseIcon } from '../../Icons/index';

const OrderPopup: React.FC<IPopupOffer> = ({ handleShowPopup, popupOfferCard }) => {
    const [isFetchingDone, setIsFetchingDone] = useState(false);

    const handleClosePopup = (evt: React.MouseEvent<HTMLElement>): void => {
        if ((evt.target as HTMLElement).dataset.popup !== 'close') return;
        handleShowPopup(false);
    };

    return (
        <div onClick={handleClosePopup} data-popup="close" className={popupStyles.popupWrapper}>
            <div className={popupStyles.popup}>
                <button
                    type="button"
                    onClick={() => handleShowPopup(false)}
                    data-popup="close"
                    className={popupStyles.popupClose}>
                    <CloseIcon />
                </button>
                {isFetchingDone ? (
                    <span className={popupStyles.popupThank}>Спасибо за заявку!</span>
                ) : (
                    <>
                        <div className={popupStyles.popupInfo}>
                            <span className={popupStyles.popupCategory}>
                                {popupOfferCard.category}
                            </span>
                            <h4 className={popupStyles.popupName}>{popupOfferCard.name}</h4>
                            <span
                                className={
                                    popupStyles.popupPrice
                                }>{`$ ${popupOfferCard.price}`}</span>
                        </div>
                        <OrderForm setIsFetchingDone={setIsFetchingDone} />
                    </>
                )}
            </div>
        </div>
    );
};

export default OrderPopup;
