import Card from '../UI/Card';
import CartItem from './CartItem';

import { useSelector } from 'react-redux';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartState = useSelector((state) => state.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartState.items.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{ 
              id: cartItem.id,
              title: `${cartItem.title}`, 
              quantity: +cartItem.quantity, 
              total: cartItem.totalPrice, 
              price: cartItem.price
            }}
        />
        ))}
        
      </ul>
    </Card>
  );
};

export default Cart;
