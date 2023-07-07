import React, {useEffect, useState} from 'react';
import Jersey from '../images/MLB_jersey-200.jpg';
import HeartEmpty from '@mui/icons-material/FavoriteBorderOutlined';
import HeartFilled from '@mui/icons-material/Favorite';

import './Card.css';
import {Link} from "react-router-dom";

const Card = () => {
    const [image, setImage] = useState();

    useEffect(() => {
        setImage(Jersey);
    })

    return (
        <div className={'card_item'}>
            <Link  to={{pathname: `/item/test`}} style={{textDecoration:"none"}}>
                <div className={'card_img'}>
                    <img alt={'jersey img'} className={'card_image'} src={image}/>
                </div>
            </Link>
            <div className={'card_title'}>Nike Arizona Diamondbacks</div>
            <div className={'card_details'}>
                <div className={'card_item_price'}>120€</div>
                <div className={'card_item_save'}><HeartEmpty style={{fontSize: 'inherit'}}/></div>
            </div>
        </div>

    );
};

export default Card;