import {ADD_CART, REMOVE_CART, EMPTY_CART} from './actionsTypes';


const defaultState = JSON.parse(localStorage.getItem("cart")) || []


const cartReducer = (state = defaultState, action)=> {

    switch (action.type) {

        case ADD_CART:
            const {product} = action;
            return [...state,product];

        case REMOVE_CART:
            const {newList} = action;
            return newList;

        case EMPTY_CART:
                const {emptyList} = action;
                return emptyList;




        default:
            return state;
    }
};

export default cartReducer;