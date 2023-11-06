import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartProvider from './store/CartProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/store', element: <Shop /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme='dark'
      />
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
