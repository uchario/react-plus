import React, { useState } from 'react';

import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && 
        <Cart
          onClickClose={hideCartHandler}
        />}
      <Header
        onShowCart={showCartHandler}
      />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
