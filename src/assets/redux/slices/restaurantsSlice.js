import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorMessage: '',
}

export const restaurantsSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        loading(state) {
            state.loading = true
        },
        getRests(state, action) {
            state.loading = false
            state.data = action.payload
        },
        getRestaurantsFailed(state, action) {
            state.loading = false
            state.errorMessage = action.payload.message
        }
    }
})

export const { loading, getRests, getRestaurantsFailed } = restaurantsSlice.actions
