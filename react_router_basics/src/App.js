import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'products',
        element: <Product/>,
      },
      {
        path: 'products/:id',
        element: <ProductDetails/>
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
