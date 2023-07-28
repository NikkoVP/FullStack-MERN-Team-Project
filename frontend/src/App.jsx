import { RouterProvider } from 'react-router-dom';
import router from './Component/router/router';
import Register from './Component/register/Register';



function App() {

  return(
    <RouterProvider router={router} />
  );

}

export default App;
