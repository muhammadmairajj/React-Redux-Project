import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "../constants/action-types"

const initialState = {
    products: []
}

const productsReducer = (state=initialState, action) => {
    // const { type, payload } = action;
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
               products: action.payload
            }
        default:
            return state;
    }
}

const selectProductReducer = (state={}, action) => {
    switch(action.type) {
        case SELECTED_PRODUCT:
            return {
                ...state, 
                ...action.payload
            }
        case REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export {
    productsReducer,
    selectProductReducer
}