import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions'; 

let isInitial = true;

function App() {
  const cartState = useSelector((state) => state.cart);
  const uiState = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  
  useEffect(() => {
    if(isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartState));
  }, [dispatch, cartState]);

  return (
    <Fragment>
      {uiState.notification && 
        cartState.changed &&
        <Notification 
          status={uiState.notification.status}
          title={uiState.notification.title}
          message={uiState.notification.message}
        />
      }
      <Layout>
        {cartState.showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
   
  );
}

export default App;
