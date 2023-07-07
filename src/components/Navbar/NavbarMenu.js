import React from 'react';
import './NavbarMenu.css';
import {useNavigate} from "react-router-dom";

const NavbarMenu = ({setOpenMenu}) => {
    const navigate = useNavigate();


    return (
        <div className={'menu'}>
            <div className={'menu_close_button'} onClick={() => setOpenMenu(false)}>X</div>
            <div className={'menu_cat_list'}>
                <div className={'menu_cat_item'} onClick={() => {setOpenMenu(false); navigate('/')}}>Home</div>
                <div className={'menu_cat_item'} onClick={() => {setOpenMenu(false); navigate('/shop/nfl')}}>NFL</div>
                <div className={'menu_cat_item'} onClick={() => {setOpenMenu(false); navigate('/shop/nhl')}}>NHL</div>
                <div className={'menu_cat_item'} onClick={() => {setOpenMenu(false); navigate('/shop/mlb')}}>MLB</div>
            </div>
        </div>
    );
};

export default NavbarMenu;