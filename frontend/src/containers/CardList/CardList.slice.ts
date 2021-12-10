import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardPrev } from '../../types/card';

interface ICardState {
    cards: ICardPrev[],
    loading: boolean
}

const initialState: ICardState = {
    cards: [],
    loading: true
}

export const cardListSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        getCards: (state, action: PayloadAction<ICardPrev[]>) => {
            state.cards = action.payload;
            state.loading = false;
        }
    }
});

export const { getCards } = cardListSlice.actions;
export default cardListSlice.reducer;