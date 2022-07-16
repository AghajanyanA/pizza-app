import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorMessage: '',
}

export const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        loading(state) {
            state.loading = true
        },
        getRestData(state, action) {
            state.loading = false
            state.data = action.payload
        },
        getDataFailed(state, action) {
            state.loading = false
            state.errorMessage = action.payload.message
        }
    }
})

export const { loading, getRestData, getDataFailed } = restaurantSlice.actions
