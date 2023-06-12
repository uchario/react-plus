import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    
    const navigateHandler = () => {
        navigate('products');
    }

    return(
        <main>
            <h1>Home Page</h1>
            <button onClick={navigateHandler}>Navigate</button>
        </main>
    );
}

export default Home;