import {createBrowserRouter} from 'react-router-dom';
import Login from '../login/Login';
import Register from '../register/Register';
import HomePage from '../homepage/Homepage';
import Todo from '../todoComponent/Todo';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Login/>,
    },
    
    {
        path:'/homepage',
        element:<HomePage />
    },

    {
        path:'/register',
        element:<Register/>
    },
    {
        path:'/home',
        element:<HomePage/>
    },
  
])
export default router;