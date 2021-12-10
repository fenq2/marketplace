import axios from 'axios';
import { ICardPrev } from '../types/card';

interface ISendOffer {
    nameValue: string | null; 
    phoneValue: string | null;
}

export const getUsers = async (): Promise<ICardPrev[]> => {
    return (await axios.get('/api/cards')).data;
}

export const sendOrder = async ({nameValue, phoneValue}: ISendOffer ) => {
    return (await axios.post('/api/order', { name: nameValue, phone: phoneValue }));
}