import React from "react";
import c from '../../../../assets/styles/menuCards.module.css'
import {useCart} from "react-use-cart";

export const MenuCards = (props) => {

    const { addItem } = useCart()
    const cartIconURL = 'https://cdn-icons-png.flaticon.com/512/263/263142.png'

    const rank = props.rank

    return(
            <div className={c.card}>
                <div className={c.img}><img src='/TASTY_PIZZA.png' alt='' width='250px' /></div>
                <div className={c.namePriceWrap}>
                    <h3 className={c.pizzaName}>{props.name}</h3>
                    <span className={c.price}>${props.price}</span>
                </div>
                <span className={c.category}>Category: {props.category}</span>
                <span className={c.rank}>{rank && <span>Rank: {rank}</span>} </span>
                {/*<span className={c.toppings}>{topping && <div>Topping: {topping.map((item, index) => <p key={index} className={`topping-${index + 1}`}>{item}</p>)}</div> }</span>*/}
                <button onClick={() => addItem(props)}> <img src={cartIconURL} alt='' /> </button>
            </div>
    )
}