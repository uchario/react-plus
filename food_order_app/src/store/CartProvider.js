import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    let existingCartItemIndex;
    let existingCartItem;
    let updatedItems, updatedItem, updateTotalAmount;

    switch (action.type) {
        case 'ADD_CART_ITEM': {
            updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
            existingCartItemIndex = state.items.findIndex(
                item => item.id === action.item.id
            );
            existingCartItem = state.items[existingCartItemIndex];

            if(existingCartItem) {
              updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
              }  
              updatedItems = [...state.items];
              updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            }
        }
        case 'REMOVE_CART_ITEM':
            existingCartItemIndex = state.items.findIndex(
                item => item.id === action.id
            );
            existingCartItem = state.items[existingCartItemIndex];
            updateTotalAmount = state.totalAmount - existingCartItem.price;

            if(existingCartItem.amount === 1) {
               updatedItems = state.items.filter(item => item.id !== action.id);
            } else {
                updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
                updatedItems = [ ...state.items ];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            }
        case 'CLEAR':
            return defaultCartState;
        default:
            return defaultCartState;
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCart({
            type: 'ADD_CART_ITEM',
            item: item
        })
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCart({ 
            type: 'REMOVE_CART_ITEM',
            id: id
        })
    }

    const clearCartHandler = () => {
        dispatchCart({ type: 'CLEAR'});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    };

    return(
        <CartContext.Provider
            value={cartContext}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;