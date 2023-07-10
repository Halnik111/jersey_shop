import React from 'react';
import './NavbarCart.css';

const NavbarCart = ({setOpenCart}) => {
    return (
        <div className={"cart"}>
            <div className={"cart_header"}>
                <div>Cart</div>
                <div className={'cart_close_button'} onClick={() => setOpenCart(false)}>X</div>
            </div>
            <div className={"cart_items"}>

            </div>
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