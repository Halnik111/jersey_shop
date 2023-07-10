import React, {useEffect, useRef, useState} from 'react';
import Jersey from '../images/MLB_jersey.jpg';
import SelectArrow from '@mui/icons-material/UnfoldMoreOutlined';
import CheckMark from '@mui/icons-material/DoneOutlined';
import Cross from '@mui/icons-material/CloseOutlined';
import './Item.css';


const Item = () => {
    const [image, setImage] = useState();
    const [sizingToggle, setSizingToggle] = useState(false);
    const [size, setSize] = useState('L');
    let sizingRef = useRef();

    useEffect(() => {
        setImage(Jersey);

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
                <img alt={'Jersey img'} className={'item_image'} src={image}/>
                <div className={'item_image_slider'}>
                    <div>Pic_1</div>
                    <div>Pic_2</div>
                    <div>Pic_3</div>
                    <div>Pic_4</div>
                </div>
            </div>
            <div className={'item_details'}>
                <div className={'item_header'}>
                    <div>Nike Arizona Diamondbacks</div>
                    <div>120€</div>
                </div>
                <div className={'item_description'}>
                    Insert all description here. Insert all description here.
                    Insert all description here. Insert all description here.
                </div>

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
        </div>
    );
};

export default Item;