import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Calculate from './components/Calculate';
import Header from './components/Header';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: '/calculate',
    element: (
      <>
        <Header />
        <Calculate />
      </>
    ),
  },
]);


const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
