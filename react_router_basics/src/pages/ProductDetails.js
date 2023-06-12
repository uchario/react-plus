import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();

    return(
        <main>
            <h1>Product Details!</h1>
            <p>{params.id}</p>
            <Link to={`..`} relative='path'>Back</Link>
        </main>
    );
}

export default ProductDetails;