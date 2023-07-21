import "./CartItem.css";

import React from 'react';
import {useDispatch} from "react-redux";
import {removeCartItem} from "../../../redux/itemSlice";

const CartItem = ({item}) => {
    const dispatch = useDispatch();


    const removeItem = () => {
        dispatch(removeCartItem(item));
    }

    return (
        <div className={'cart_item'}>
            <div className={'cart_item_header'}>
                <div>{item.name}</div>
                <div className={'cart_item_cross'} onClick={() => removeItem()}>X</div>
            </div>
                <img alt={'jersey'} className={'cart_item_body_picture'} src={item.image}/>
                <div className={'cart_item_body_details'}>
                    <div>Size: {item.size}</div>
                    <div>Quantity: {item.quantity}</div>
                </div>
            <div className={'cart_item_body_price'}>
                        <div>Price:</div>
                        <div>€ {item.price.$numberDecimal * item.quantity}</div>
                    </div>
        </div>
    );
};

export default CartItem;