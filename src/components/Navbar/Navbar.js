import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../../images/MLB.png';
import NavbarMenu from "./NavbarMenu";
import NavbarCart from "./Cart/NavbarCart";
import {useSelector} from "react-redux";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const { items } = useSelector(state => state.jersey_reducer)

    const menu = () => {
        if (openMenu) {
            document.body.classList.add('preventScroll');
            return <NavbarMenu setOpenMenu={setOpenMenu}/>
        }
        else {
            document.body.classList.remove('preventScroll');
        }
    };

    const cart = () => {
        if (openCart) {
            document.body.classList.add('preventScroll');
            return <NavbarCart setOpenCart={setOpenCart}/>
        }
        else {
            document.body.classList.remove('preventScroll');
        }
    }

    return (
        <div className={'navbar'}>
            {menu()}
            {cart()}
            <div className={'menu_box'} onClick={() => setOpenMenu(!openMenu)}>
                <MenuOutlinedIcon style={{fontSize: 'inherit'}}/>
            </div>
            <div className={'navbar_logo'} >
                <Link to={"/"} style={{textDecoration:"none", color:"inherit"}}>
                    <img src={Logo} width={100} height={50} alt={'logo'}/>
                </Link>
            </div>
            <div className={'navbar_cart'} >
                {items.length > 0 ?
                    <div>
                        <div className={'navbar_cart_indicator'}></div>
                        <ShoppingCartOutlinedIcon onClick={() => setOpenCart(true)} style={{fontSize: 'inherit'}}/>
                    </div>
                    :
                    <ShoppingCartOutlinedIcon onClick={() => setOpenCart(true)} style={{fontSize: 'inherit'}}/>
                }
            </div>
        </div>
    );
};

export default Navbar;