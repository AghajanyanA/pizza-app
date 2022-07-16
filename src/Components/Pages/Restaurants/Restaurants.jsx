import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../../assets/redux/actions/restaurantsAction";
import {RestaurantsCard} from "./RestaurantsCard/RestaurantsCard";

const Restaurants = () => {
    const dispatch = useDispatch()
    const restsData = useSelector(state => state.restaurants.data)
    const loading = useSelector(state => state.restaurants.loading)
    const error = useSelector(state => state.restaurants.errorMessage)

    useEffect(() => {
        dispatch(getRestaurants())
    }, []) //eslint-disable-line

    return (
        <div>
            { loading && 'Loading...' }
            { error && error }
            { !loading && !error && restsData.map(restaurants => <RestaurantsCard key={ restaurants.id } { ...restaurants } />) }
        </div>
    )
}

export default Restaurants