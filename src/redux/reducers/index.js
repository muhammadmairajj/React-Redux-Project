import { combineReducers } from "redux";
import { productsReducer, selectProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectProductReducer
});

export default reducers;