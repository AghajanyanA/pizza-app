import {loadFailed, loading, loadSuccess, setNoID} from "../slices/menuSlice";
import axios from "../../axios/axios";

export const getMenuById = (id, category = 'pizza', rank ) => async dispatch => {
    const orderBy = rank ? `&orderBy=${rank}` : ''
    try {
        if(!id) {
            dispatch(setNoID())
            return
        }
        dispatch(loading())
        const response = await axios.get(`restaurants/${id}/menu?category=${category}${orderBy}`)
        dispatch(loadSuccess(response.data))
    }
    catch (e) {
    dispatch(loadFailed(e))
    }
}