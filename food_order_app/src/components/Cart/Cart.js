    import React, { useContext } from 'react';

    import Overlay from '../UI/Overlay/Overlay';
    import Button from '../UI/Button/Button';
    import CartContext from '../../store/cart-context';
    import CartItem from './CartItem';

    import styles from './Cart.module.css';

    const Cart = (props) => {
        const cartCtx = useContext(CartContext);

        const cartItemRemoveHandler = (id) => {
            cartCtx.removeItem(id);
        };

        const cartItemAddHandler = (item) => {
            cartCtx.addItem({
                ...item, amount: 1
            });
        };

        const cartItems = cartCtx.items.map(item => 
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={+item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                >
                    {item.name}
                </CartItem>
            );
        const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
        const hasItems = cartCtx.items.length > 0;

        return(
            <Overlay onClose={props.onClickClose}>
                {!hasItems && <p className={`${styles['no-items']}`}>No items found</p>}
                {hasItems &&
                    <ul className={`${styles['cart-items']}`}>
                        {cartItems}
                    </ul>
                }
                <div className={`${styles.total}`}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={`${styles.actions}`}>
                    <Button
                        className={`${styles['button--alt']}`}
                        value='close'
                        onClick={props.onClickClose}
                    />
                    {hasItems &&
                        <Button
                            className={`${styles.button}`}
                            value='order'
                        />
                    }
                </div>
            </Overlay>
        );
    };

    export default Cart;