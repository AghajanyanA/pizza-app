import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {menuSlice} from "./slices/menuSlice";
import {restaurantsSlice} from "./slices/restaurantsSlice";
import {restaurantSlice} from "./slices/restaurantSlice";



const reducers = combineReducers({
    menu: menuSlice.reducer,
    restaurants: restaurantsSlice.reducer,
    restaurant: restaurantSlice.reducer
})

export const store = configureStore({
    reducer: reducers
})

window.store = store