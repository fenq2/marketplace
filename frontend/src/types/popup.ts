import { ICardPrev } from './card';

export interface IPopupOffer {
    popupOfferCard: ICardPrev;
    handleShowPopup: (args: boolean) => void;
}