import { useDispatch, useSelector } from 'react-redux';

import { cartActions } from '../../store/cart'; 

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const showCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartState.totalQuantity}</span>
    </button>
  );
};

export default CartButton;
