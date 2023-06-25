const { createContext, useState } = require("react");

export const ProductsContext = createContext({
    products: [],
    toggleFav: (id) => {}
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

    const toggleFavorite = (productId) => {
        setProducts((prevProducts) => {
            const prodIndex = prevProducts.findIndex(
                p => p.id === productId
              );
              const newFavStatus = !prevProducts[prodIndex].isFavorite;
              const updatedProducts = [...prevProducts];
              updatedProducts[prodIndex] = {
                ...prevProducts[prodIndex],
                isFavorite: newFavStatus
              };
            return updatedProducts;
        });
    }

    return(
        <ProductsContext.Provider
            value={{
                products: products,
                toggleFav: toggleFavorite
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;