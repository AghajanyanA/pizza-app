import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantData} from "../../../assets/redux/actions/restaurantAction";
import '../../../assets/styles/restaurant.module.css'

const Restaurant = () => {

    const { restaurantId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurantData(restaurantId))
    }, []) //eslint-disable-line

    const loading = useSelector(state => state.restaurant.loading)
    const errorMessage = useSelector(state => state.restaurant.errorMessage)
    const data = useSelector(state => state.restaurant.data)


    return (
        <div>
        {loading && 'loading...'}
        {errorMessage && errorMessage}
            {!loading && !errorMessage && <>
                <h1>{data.name}</h1>
                <p>Visit restaurant's menu: <Link to={`/restaurants/${restaurantId}/menu`} >Click!  </Link> </p>


            </>} </div>
    )
}

export default Restaurant