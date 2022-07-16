import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
    errorMessage: '',
    noID: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        loading(state) {
            state.noID = false
            state.loading = true
        },
        loadSuccess(state, action) {
            state.loading = false
            state.data = action.payload
            state.noID = false
        },
        loadFailed(state, action) {
            state.loading = false
            state.errorMessage = action.payload.message
            state.noID = false
        },
        setNoID(state) {
            state.loading = false
            state.noID = true
        }
    }
})

export const { loading, loadSuccess, loadFailed, setNoID} = menuSlice.actions