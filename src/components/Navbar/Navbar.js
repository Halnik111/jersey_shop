import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Logo from '../../images/MLB.png';

const Navbar = ({openMenu, setOpenMenu}) => {
    return (
        <div className={'navbar'}>
            <div className={'menu_box'} onClick={() => setOpenMenu(!openMenu)}>
                <MenuOutlinedIcon style={{fontSize: 'inherit'}}/>
            </div>
            <div className={'navbar_logo'} >
                <Link to={"/"} style={{textDecoration:"none", color:"inherit"}}>
                    <img src={Logo} width={100} height={50} alt={'logo'}/>
                </Link>
            </div>
            <div className={'navbar_cart'} >
                <ShoppingCartOutlinedIcon style={{fontSize: 'inherit'}}/>
            </div>
        </div>
    );
};

export default Navbar;