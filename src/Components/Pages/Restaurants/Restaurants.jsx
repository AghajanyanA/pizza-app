import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../../assets/redux/actions/restaurantsAction";
import {RestaurantsCard} from "./RestaurantsCard/RestaurantsCard";

const Restaurants = () => {
    const dispatch = useDispatch()
    const {restsData, loading, error} = useSelector(state => state.restaurants)

    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch]) //eslint-disable-line

    return (
        <div>
            { loading && 'Loading...' }
            { error && error }
            { !loading && !error && restsData.map(restaurants => <RestaurantsCard key={ restaurants.id } { ...restaurants } />) }
        </div>
    )
}

export default Restaurants