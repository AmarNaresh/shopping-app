import { ActionsTypes } from "../contants/action-types";

const initialState = {
    products:[],
}
export const productReducer = (state =initialState, {type, payload})=> {
    switch (type) {
        case ActionsTypes.SET_PRODUCTS:
           return {...state, products:payload};
        
        case ActionsTypes.FETCH_PRODUCTS:
            return {...state, products:payload};   
        default:
             return state;
    }
};

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case  ActionsTypes.SELECTED_PRODUCT:
            return {...state, ...payload}

        case ActionsTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

