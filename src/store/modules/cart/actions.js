import {ADD_CART, REMOVE_CART, EMPTY_CART} from './actionsTypes';

export const addCart = (product) => ({ type: ADD_CART, product });

export const removeCart = (newList) => ({ type: REMOVE_CART, newList });

export const emptyCart = (emptyList) => ({type: EMPTY_CART, emptyList });
