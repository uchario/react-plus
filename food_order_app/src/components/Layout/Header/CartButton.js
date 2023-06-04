import React from 'react';

import { useContext, useState, useEffect } from 'react';

import CartIcon from '../../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

import styles from  './CartButton.module.css';

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnBump, setBtnBump] = useState(false);

    const { items } = cartCtx;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setBtnBump(true);
        console.log('button bump: true');

        const timer = setTimeout(() => {
            setBtnBump(false);
            // console.log('button bump: false');
        }, 300);

        return () => {
            clearTimeout(timer);
            // console.log('clear timeout');
        }
    }, [items]);

    const numberOfCartItems = items.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnBump && styles.bump}`;

    return (
        <button 
            className={`${btnClasses}`}
            onClick={props.onClick}
        >
            <span className={`${styles.icon}`}>
                <CartIcon/>
            </span>
            <span>Your cart</span>
            <span className={`${styles.badge}`}>{numberOfCartItems}</span>
        </button>
    );
};

export default CartButton;