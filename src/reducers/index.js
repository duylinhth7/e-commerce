import {combineReducers} from "redux";
import cartReducer from "./cart";
import orderReducer from "./order";
const allReducres = combineReducers({
    cartReducer,
    orderReducer
})
export default allReducres;