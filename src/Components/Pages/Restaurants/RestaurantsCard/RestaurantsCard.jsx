import React from "react";
import c from '../../../../assets/styles/RestaurantsCard.module.css'
import { useNavigate } from "react-router-dom";


export const RestaurantsCard = (props) => {
    const navigate = useNavigate()

    const clickHandler = () => navigate(`/restaurants/${props.id}`)
    return (
        <div className={c.wrap}>
            <h3 className={c.restaurant} onClick={clickHandler}> { props.name } </h3>
            <p> { props.address1 }, { props.address2 } </p>
            <p> { props.latitude } / { props.longitude } </p>
        </div>
    )
}