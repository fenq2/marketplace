import { Dispatch } from 'redux';
import { getUsers } from '../../services/api';

import { getCards } from './CardList.slice';

export const getCardsAsync = () => {
    return async (dispatch: Dispatch) => {
        try {
            const getData = async () => {
                const response = await getUsers();
                dispatch(getCards(response));
            };
            getData();
        } catch (error) {
            console.log(error);
        }
    };
};