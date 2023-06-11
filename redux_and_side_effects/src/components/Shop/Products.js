import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'First book',
    description: 'My first book I wrote',
    price: 5.00
  },
  {
    id: 'p2',
    title: 'Second book',
    description: 'My second book I wrote',
    price: 6.00
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
