import axios from "../../axios/axios";
import {getRestaurantsFailed, getRests, loading} from "../slices/restaurantsSlice";

export const getRestaurants = () => async (dispatch) => {
    try {
        dispatch(loading())
        const request = await axios.get('restaurants/')
        dispatch(getRests(request.data))
    }
    catch (e) {
        dispatch(getRestaurantsFailed(e))
    }
}