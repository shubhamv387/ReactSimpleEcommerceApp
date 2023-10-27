import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <Header />
      <main className='my-5'>
        <ProductList />
      </main>
      <Footer />
    </>
  );
}

export default App;
