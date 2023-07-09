import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className={'footer'}>
            <ul className={'footer_column'}>
                <li><a href={'/legal/terms'}>Terms & conditions</a></li>
                <li><a href={'/legal/privacy'}>Privacy policy</a></li>
                <li><a href={'/legal/return'}>Return policy</a></li>
                <li><a href={'/legal/shipping'}>Shipping</a></li>
            </ul>
            <ul className={'footer_column'}>
                <li><a href={''}>Instagram</a></li>
                <li><a href={''}>Twitter</a></li>
                <li><a href={''}>Facebook</a></li>
            </ul>
        </div>
    );
};

export default Footer;