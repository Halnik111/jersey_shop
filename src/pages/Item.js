import React, {useEffect, useRef, useState} from 'react';
import SelectArrow from '@mui/icons-material/UnfoldMoreOutlined';
import CheckMark from '@mui/icons-material/DoneOutlined';
import Cross from '@mui/icons-material/CloseOutlined';
import './Item.css';
import {useLocation} from "react-router-dom";


const Item = () => {
    const [item,setItem] = useState({});
    const [sizingToggle, setSizingToggle] = useState(false);
    const [size, setSize] = useState('L');
    let location = useLocation();
    let sizingRef = useRef();

    useEffect(() => {
        setItem(location.state);
        loadImages();
        loadSizingStock();

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

    const loadSizingStock = () => {

    }

    const sizing = () => {
        if (sizingToggle) {
            return (
                <div className={'item_sizing_expandable_wrapper'} ref={sizingRef}>
                    <div className={'item_sizing_expandable'}>
                        <div className={'item_checkmarks'}>
                            <CheckMark className={'checkmark'} onClick={() => {setSize('S') }}/>
                            <CheckMark className={'checkmark'} onClick={() => {setSize('M') }}/>
                            <CheckMark className={'checkmark'} onClick={() => {setSize('L') }}/>
                            <CheckMark className={'checkmark'} onClick={() => {setSize('XL') }}/>
                            <CheckMark className={'checkmark'} onClick={() => {setSize('XXL') }}/>
                        </div>
                        <div className={'item_sizes'}>
                            <div className={'size'} onClick={() => {setSize('S') }}>S</div>
                            <div className={'size'} onClick={() => {setSize('M') }}>M</div>
                            <div className={'size'} onClick={() => {setSize('L') }}>L</div>
                            <div className={'size'} onClick={() => {setSize('XL') }}>XL</div>
                            <div className={'size'} onClick={() => {setSize('XXL') }}>XXL</div>
                        </div>
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
                <div className={'item_buy_config'}>
                    <div className={'item_config_wrapper'}>
                        <div className={'item_sizing'} onClick={() => setSizingToggle(!sizingToggle)}>
                            <div onChange={() => {}}>Size: {size}</div>
                            {sizing()}
                            <SelectArrow style={{zIndex: '1'}}/>
                        </div>
                        <div className={'item_cart'}>Add to cart</div>
                    </div>
                </div>
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