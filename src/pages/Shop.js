import React, {useEffect, useState} from 'react';
import Card from "../components/Card";
import './Shop.css';
import axios from "axios";
import {useLocation} from "react-router-dom";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const path = useLocation().pathname.split("shop/")[1];

    useEffect(() => {
        loadProducts();
    }, [path]);

    const loadProducts = async () => {
        await axios.get(`https://jersey-shop-api.azurewebsites.net/products/category/${path.toUpperCase()}`)
            .then(res => setProducts(res.data))
            .catch(console.log);
    }

    return (
        <div className={'shop'}>
            {products.map(item => <Card item={item} key={item._id}/>)}
        </div>
    );
};

export default Shop;