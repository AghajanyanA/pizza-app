import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../../../../assets/redux/actions/restaurantsAction";
import c from '../../../../assets/styles/MenuWithoutID.module.css'
import {getMenuById} from "../../../../assets/redux/actions/menuAction";
import Menu from "../Menu"

export const MenuWithoutID = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurants())
    }, []) //eslint-disable-line

    const restaurants = useSelector(state => state.restaurants.data)
    const [active, setActive] = useState(null)

    const handleRestSelection = (e) => {
        setActive(e.target.attributes.id.value)
        dispatch(getMenuById(active))
    }

    return (
        <>
            <h3>Hey please choose your desired restaurant below</h3>
            <div className={c.restaurants} > { restaurants.map(item => <p id={ item.id } onClick={ handleRestSelection }
                     className={ `${c.resItem} ${active === item.id ? 'active' : ''} `} key={ item.id }>{ item.name }</p>)}</div>
            {active != null ? <Menu id={active} /> : ''}
            {/*if no id was given then show box to select from available restaurants, else show what's present*/}
            {/*<br/>*/}
            {/*no id, picker component to be here*/}
        </>
    )
}