import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CartProvider from './store/CartProvider';

function App() {
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
      <main className='my-5'>
        <ProductList />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
