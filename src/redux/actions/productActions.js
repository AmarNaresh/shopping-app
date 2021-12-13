import { ActionsTypes } from "../contants/action-types";
import productApi from "../../api/productApi";

export const fetchProducts =  () => async (dispatch) =>{
    const response = await productApi.get("/products");
    dispatch({type: ActionsTypes.FETCH_PRODUCTS, payload: response.data});
};

export const fetchProduct =  (id) => async (dispatch) =>{
    const response = await productApi.get(`/products/${id}`);
    dispatch({type: ActionsTypes.SELECTED_PRODUCT, payload: response.data});
};

export const setProducts = (products) => {
    return{
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return{
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return{
        type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
    };
};