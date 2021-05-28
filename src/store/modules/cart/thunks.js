import {addCart, removeCart } from './actions';

export const addCartThunk = (product) => {
    return (dispatch) => {
        const list = JSON.parse(localStorage.getItem("cart")) || [];
        list.push(product);
        localStorage.setItem("cart", JSON.stringify(list));
        dispatch(addCart(product))
    }
}

export const removeCartThunk = (id) => (dispatch) => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const list = cart.filter(item=> item.id !== id);
    localStorage.setItem("cart", JSON.stringify(list))
    const newList = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(removeCart(newList))   
}

export const emptyCartThunk = () => (dispatch) => {

    localStorage.clear()
    const newList = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(removeCart(newList))   
}


