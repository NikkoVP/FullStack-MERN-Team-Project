import {createBrowserRouter} from 'react-router-dom';
import Login from '../login/Login';
import Register from '../register/Register';
import HomePage from '../homepage/Homepage';
import Todo from '../todoComponent/Todo';
const router = createBrowserRouter([
    {
        path:'/',
        element:'',
    },
    
    {
        path:'/login',
        element:<Login/>
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