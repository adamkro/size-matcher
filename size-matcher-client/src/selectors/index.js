import { store } from '../store';


export const selectBrand = () => store.getState().brand;

export const selectProduct = () => store.getState().product;