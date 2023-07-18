import React from 'react';
import HeartEmpty from '@mui/icons-material/FavoriteBorderOutlined';
import HeartFilled from '@mui/icons-material/Favorite';
import './Card.css';
import {useNavigate} from "react-router-dom";

const Card = ({item}) => {
    const navigate = useNavigate();

    return (
        <div className={'card_item'}>
            <div className={'card_img'} onClick={() => navigate(`/item/${item._id}`, {state: item})}>
                <img alt={'jersey img'} className={'card_image'} src={item.image}/>
            </div>

            <div className={'card_details'}>
                <div className={'card_title'}>{item.name}</div>
                <div className={'card_inner_wrapper'}>
                    {
                        item.stock[0].total > 0 ?
                            <div className={'card_item_price'}>{item.price?.$numberDecimal}</div>
                            :
                            <div className={'card_item_out_of_stock'}>Out of Stock</div>
                    }
                    <div className={'card_item_save'}><HeartEmpty style={{fontSize: 'inherit'}}/></div>
                </div>
            </div>
        </div>

    );
};

export default Card;