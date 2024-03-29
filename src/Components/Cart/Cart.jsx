import React from "react";
import {useCart} from "react-use-cart";
import c from '../../assets/styles/Cart.module.css'

export const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>


    return (
        <div className={c.wrap}>
            <h1>Cart ({totalUniqueItems})</h1>

            <ul>
                {items.map((item) => (
                    <li className={c.list} key={item.id}>
                        {item.quantity} x {item.name} &mdash;
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >
                            -
                        </button>
                        <button
                            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >
                            +
                        </button>
                        <button onClick={() => removeItem(item.id)}>&times;</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}