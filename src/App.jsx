import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CartProvider from './store/CartProvider';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/store', element: <Shop /> },
  ]);

  return (
    <CartProvider>
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

      <Header />
      <main className='my-3 d-flex mx-auto container-xxl p-lg-4 p-sm-3 p-2'>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
