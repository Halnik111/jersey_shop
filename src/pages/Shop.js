import React from 'react';
import Card from "../components/Card";
import './Shop.css';

const Shop = ({type}) => {

    return (
        <div className={'shop'}>
            <Card />
            <Card />
        </div>
    );
};

export default Shop;