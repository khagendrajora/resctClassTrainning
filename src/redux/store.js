import { combineReducers, createStore } from "redux";
import cartReducer from './reducers/cartReducer';
import gameReducer from "./reducers/gameReducer";

const reducer = combineReducers({
    cart: cartReducer,
    game: gameReducer
})

const store = createStore(reducer)

export default store