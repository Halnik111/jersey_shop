import React, {useEffect, useState} from 'react';
import './NavbarCart.css';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const NavbarCart = ({setOpenCart}) => {
    const [height, setHeight] = useState(0);
    const { items } = useSelector(state => state.jersey_reducer);

    let resizeWindow = () => {
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return (
        <div className={"cart"} style={{height: height}}>
            <div className={"cart_header"}>
                <div>Cart</div>
                <div className={'cart_close_button'} onClick={() => setOpenCart(false)}>X</div>
            </div>
            {items.length > 0 ?
                <div className={'cart_items'}>
                    <div className={'cart_items_wrapper'}>
                        {items.map(item => <CartItem item={item} key={item.id}/>)}
                    </div>
                </div>
                :
                <div className={"cart_items_empty"}>
                    <div>
                        Cart's empty..
                    </div>
                </div>
            }
            <div className={"cart_checkout"}>
                <div className={'cart_summary'}>
                    <div>SUBTOTAL</div> <div>€00,0</div>
                </div>
                <div className={'cart_checkout_info_box'}>

                </div>
                <div className={'cart_checkout_button'}>
                    Check out
                </div>
            </div>
        </div>
    );
};

export default NavbarCart;