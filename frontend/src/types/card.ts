export interface ICardList {
    handleShowPopup: (args: boolean) => void;
    setPopupOfferCard: (args: ICardPrev) => void;
}

export interface ICardPrev {
    name: string;
    category: string;
    price: number;
}

export interface ICardListState {
    cardList: { cards: ICardPrev[]; loading: boolean };
}