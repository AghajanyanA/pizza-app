import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../../../assets/redux/actions/restaurantsAction";
import c from '../../../../assets/styles/MenuWithoutID.module.css'

export const MenuWithoutID = p => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    const restaurants = useSelector(state => state.restaurants.data)
    // console.log(restaurants)

    const [restaurant, setRestaurant] = useState(null)

    const handleRestSelection = (e) => {
        console.log(e)
        e.target.classList.toggle('active')
    }



    return (
        <>
            <div className={c.restaurants}>{restaurants.map(item => <p onClick={handleRestSelection} className={c.resItem} key={item.id}>{item.name}</p>)}</div>


            {/*if no id was given then show box to select from available restaurants, else show what's present*/}
            {/*<br/>*/}
            {/*no id, picker component to be here*/}
        </>
    )
}