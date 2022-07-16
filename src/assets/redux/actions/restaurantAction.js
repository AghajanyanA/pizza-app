import axios from "../../axios/axios";
import {getDataFailed, getRestData, loading} from "../slices/restaurantSlice";

export const getRestaurantData = (id) => async (dispatch) => {
    try {
        dispatch(loading())
        const request = await axios.get(`restaurants/${id}`)
        dispatch(getRestData(request.data))
    }
    catch (e) {
        dispatch(getDataFailed(e))
    }
}