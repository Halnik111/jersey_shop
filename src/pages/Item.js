import React, {useEffect, useRef, useState} from 'react';
import SelectArrow from '@mui/icons-material/UnfoldMoreOutlined';
import CheckMark from '@mui/icons-material/DoneOutlined';
import Cross from '@mui/icons-material/CloseOutlined';
import './Item.css';
import {useLocation} from "react-router-dom";


const Item = () => {
    const [item,setItem] = useState({});
    const [inventory, setInventory] = useState({});
    const [sizingToggle, setSizingToggle] = useState(false);
    const [size, setSize] = useState('');
    let location = useLocation();
    let sizingRef = useRef();

    useEffect(() => {
        setItem(location.state);
        setInventory(location.state.stock[0].inventory);
        loadImages();

        let handler = (e) => {
            try {
                if (!sizingRef.current.contains(e.target)) {
                    setSizingToggle(false);
                }
            }
            catch (err) {
            }
        }
        document.addEventListener("mousedown", handler);
    },[]);

    const loadImages = () => {

    }

    const selectSize = (e) => {
        setSize(e);
        setSizingToggle(!sizingToggle);
    }

    const buy_config = () => {
        if (item.stock) {
            if (item.stock[0].total > 0) {
                return <div className={'item_buy_config'}>
                    <div className={'item_config_wrapper'}>
                        <div className={'item_sizing_wrapper'}>
                            <div className={'item_sizing'} onClick={() => setSizingToggle(!sizingToggle)}>
                                <div>Size: {size}</div>
                                <SelectArrow style={{zIndex: '1'}}/>
                            </div>
                            {sizing()}
                        </div>
                        <div className={'item_cart'}>{'Add to cart'}</div>
                    </div>
                </div>
            }
            else {
                return <div className={'item_buy_config'}>
                    <div className={'item_config_wrapper item_config_flag_red'}>
                        <div className={'item_sizing_wrapper'}>
                            <div>Size: {size}</div>
                            <SelectArrow style={{zIndex: '1'}}/>
                        </div>
                        <div className={'item_cart item_cart_flag_red'}>{'Out of stock'}</div>
                    </div>
                </div>
            }
        }
    }

    const sizing = () => {
        if (sizingToggle) {
            return (
                <div className={'item_sizing_expandable_wrapper'} ref={sizingRef}>
                    <div className={'item_sizing_expandable'}>
                        {inventory.S > 0 ?
                            <div className={'item_sizing_row'} onClick={() => selectSize('S')}>
                                <CheckMark className={'checkmark'}/>
                                <div className={'size'}>S</div>
                            </div>
                            :
                            <div className={'item_sizing_row item_flag_red'}>
                                <Cross className={'checkmark'} />
                                <div className={'size'}>S</div>
                            </div>
                        }
                        {inventory.M > 0 ?
                            <div className={'item_sizing_row'} onClick={() => selectSize('M')}>
                                <CheckMark className={'checkmark'}/>
                                <div className={'size'}>M</div>
                            </div>
                            :
                            <div className={'item_sizing_row item_flag_red'}>
                                <Cross className={'checkmark'} />
                                <div className={'size'}>M</div>
                            </div>
                        }
                        {inventory.L > 0 ?
                            <div className={'item_sizing_row'} onClick={() => selectSize('L')}>
                                <CheckMark className={'checkmark'}/>
                                <div className={'size'}>L</div>
                            </div>
                            :
                            <div className={'item_sizing_row item_flag_red'}>
                                <Cross className={'checkmark'} />
                                <div className={'size'}>L</div>
                            </div>
                        }
                        {inventory.XL > 0 ?
                            <div className={'item_sizing_row'} onClick={() => selectSize('XL')}>
                                <CheckMark className={'checkmark'}/>
                                <div className={'size'}>XL</div>
                            </div>
                            :
                            <div className={'item_sizing_row item_flag_red'}>
                                <Cross className={'checkmark'} />
                                <div className={'size'}>XL</div>
                            </div>
                        }
                        {inventory.XXL > 0 ?
                            <div className={'item_sizing_row'} onClick={() => selectSize('XXL')}>
                                <CheckMark className={'checkmark'}/>
                                <div className={'size'}>XXL</div>
                            </div>
                            :
                            <div className={'item_sizing_row item_flag_red'}>
                                <Cross className={'checkmark'} />
                                <div className={'size'}>XXL</div>
                            </div>
                        }
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={'item'}>
            <div className={'item_image_wrapper'}>
                <img alt={'Jersey img'} className={'item_image'} src={item.image}/>
                <div className={'item_image_slider'}>
                    <div>Pic_1</div>
                    <div>Pic_2</div>
                    <div>Pic_3</div>
                    <div>Pic_4</div>
                </div>
            </div>
            <div className={'image_details_wrapper'} >
                <div className={'item_details'}>
                    <div className={'item_header'}>
                        <div>{item.name}</div>
                        <div>{item.price?.$numberDecimal}</div>
                    </div>
                    <div className={'item_description'}>{item.desc}</div>
                </div>
                {buy_config()}
                <div className={'item_table'}>
                    <div className={'item_table_row_1'}>
                        <div>Category</div>
                        <div>Team</div>
                        <div>Player</div>
                    </div>
                    <div className={'item_table_row_2'}>
                        <div>{item.category}</div>
                        <div>{item.team}</div>
                        <div>{item.player}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;