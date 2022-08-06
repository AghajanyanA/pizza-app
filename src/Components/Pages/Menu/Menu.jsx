import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getMenuById} from "../../../assets/redux/actions/menuAction";
import {MenuCards} from "./MenuCards/MenuCards";
import {MenuWithoutID} from "./MenuWithoutID/MenuWithoutID";
import c from '../../../assets/styles/Menu.module.css'
import {Filters} from "./Filters/Filters";
import {Cart} from "../../Cart/Cart";
import {useCart} from "react-use-cart";

const Menu = ({id}) => {

    const { setItems } = useCart()
    const dispatch = useDispatch()

    const {restaurantId} = useParams()
    const truth = id ? id : restaurantId  //its the noid loop // solved

    const {menuData, loading, error, noID} = useSelector(state => state.menu)

    useEffect(() => {
        dispatch(getMenuById(truth))       // this // solved
        setItems(menuData)
    }, [truth]) //eslint-disable-line


    return (
        <>
            {loading && 'Loading...'}
            {noID && <MenuWithoutID />}
            {error && error}
            {!error && !loading && !noID &&
                <div className={c.wrapper} >
                    <div className={c.filters}><Filters /></div>
                    <div className={c.cards}>{menuData.map(item => <MenuCards key={item.id} {...item} />)}</div>
                    <Cart />
                </div>

            }

        </>
    )
}

export default Menu