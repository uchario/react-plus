const { createContext, useState } = require("react");

export const ProductsContext = createContext({
    products: []
});

const INITIAL_PRODUCTS = [
    {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
      }
];

const ProductsProvider = (props) => {
    const [products, setProducts] = useState(INITIAL_PRODUCTS);

    return(
        <ProductsContext.Provider
            value={{
                products: products
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;