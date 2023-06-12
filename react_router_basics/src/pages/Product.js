import { Link } from "react-router-dom";

const PRODUCTS = [
    {
        id: 'p1', 
        title: 'product 1'
    },
    {
        id: 'p2', 
        title: 'product 2'
    },
    {
        id: 'p3', 
        title: 'product 3'
    }
]

const Product = () => {
    return(
        <main>
            <h1>My Products</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Link 
                            to={`${product.id}`}
                        >
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Product;