import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMenuById} from "../../../assets/redux/actions/menuAction";
import {MenuCards} from "./MenuCards/MenuCards";
import {MenuWithoutID} from "./MenuWithoutID/MenuWithoutID";
import c from '../../../assets/styles/Menu.module.css'
import {Filters} from "./Filters/Filters";

const Menu = () => {

    const dispatch = useDispatch()

    const {restaurantId} = useParams()

    useEffect(() => {
        dispatch(getMenuById(restaurantId))
    }, [restaurantId]) //eslint-disable-line


    const menuData = useSelector(state => state.menu.data)
    const loading = useSelector(state => state.menu.loading)
    const error = useSelector(state => state.menu.errorMessage)
    const noID = useSelector(state => state.menu.noID)

    return (
        <>

            {loading && 'Loading...'}
            {noID && <MenuWithoutID />}
            {error && error}
            {!error && !loading && !noID &&
                <div className={c.wrapper} >
                    <div className={c.filters}><Filters /></div>
                    <div className={c.cards}>{menuData.map(item => <MenuCards key={item.id} {...item} />)}</div>
                </div>

            }

        </>
    )
}

export default Menu