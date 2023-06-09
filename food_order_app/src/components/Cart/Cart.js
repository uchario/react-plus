    import React, { useContext, useState } from 'react';

    import Overlay from '../UI/Overlay/Overlay';
    import Button from '../UI/Button/Button';
    import CartContext from '../../store/cart-context';
    import CartItem from './CartItem';
    import Checkout from './Checkout';
    import useHttp from '../../hooks/use-http';

    import styles from './Cart.module.css';

    const Cart = (props) => {
        const cartCtx = useContext(CartContext);
        const [showCheckout, setShowCheckout] = useState(false);
        const [didSubmit, setDidSubmit] = useState(false);

        const { isLoading: isSubmitting, error, sendRequest } = useHttp();

        const dataTransform = (data) => {

        }

        const submitOrderHandler = (userData) => {
            const requestConfig = {
                url: 'https://movie-http-21f07-default-rtdb.firebaseio.com/orders.json',
                method: 'POST',
                body: {
                    user: userData,
                    orderedItems: cartCtx.items
                }
            };
            // console.log(requestConfig.body);
            // console.log(cartCtx.items);
            sendRequest(requestConfig, dataTransform);
            setDidSubmit(true);
            cartCtx.clearCart();
        }

        const orderClickHandler = () => {
            setShowCheckout(true)   
        }

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

        const modalActions =  <div className={`${styles.actions}`}>
                                <Button
                                    className={`${styles['button--alt']}`}
                                    value='close'
                                    onClick={props.onClickClose}
                                />
                                {hasItems &&
                                    <Button
                                        className={`${styles.button}`}
                                        value='order'
                                        onClick={orderClickHandler}
                                    />
                                }
                            </div>;

        let content =  <div>
                            {showCheckout && 
                            <Checkout 
                                onCancel={props.onClickClose}
                                onConfirm={submitOrderHandler}
                            />}
                            {!showCheckout && modalActions}
                        </div>;

        if(isSubmitting) {
            content = 'Submitting...';
        }

        if(!isSubmitting && error) {
            content = error;
        }

        if(!isSubmitting && !error && didSubmit) {
            content = 'Submitted!';
        }

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
                <div>
                    {content}
                </div>
               
            </Overlay>
        );
    };

    export default Cart;