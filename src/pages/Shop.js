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

    //TODO replace url
    const loadProducts = async () => {
        await axios.get(`https://jersey-shop-api.azurewebsites.net/products/category/${path.toUpperCase()}`)
            .then(res => {setProducts(res.data); return res.data})
            .catch(console.log);
    }

    const displayProducts = () => {
        if (products.length === 0) {
            return (
                <div className={"item_0_items_found"}>No Items found here..</div>
            )
        }
        else {
            return (
                <div className={'shop'}>
                    {products.map(item => <Card item={item} key={item._id}/>)}
                </div>
            )
        }
    }

    return (
        <div>
            {displayProducts()}
        </div>
    );
};

export default Shop;