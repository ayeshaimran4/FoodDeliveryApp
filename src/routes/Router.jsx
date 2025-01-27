 import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import LoginPage from '../Components/login/loginPage';
import AdminPanel from '../Components/adminpanel/adminPanel';
import Menu from '../pages/menu/Menu';
import Orders from '../pages/orders/Orders';
import Cart from '../pages/cart/Cart';
import UserPanelLayout from '../layout/UserPanelLayout';
import { CartProvider } from '../context/cartContext';


 const router = createBrowserRouter([
     {
        path:'/',
         element:<LoginPage/>,
    },
    {
      path:"/",
      element:<UserPanelLayout/>,
      children:[
        {
          path: '/menu',
          element: <Menu />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ]
    },
    {
      path:'/admin',
      element:<AdminPanel/>,
    },
    

 ])
 function Router() {
  return (
    <CartProvider> 
      <RouterProvider router={router} />
    </CartProvider>
  );
}

  
  export default Router;