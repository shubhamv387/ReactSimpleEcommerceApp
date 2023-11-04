import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
      <main className='my-5'>
        <ProductList />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
