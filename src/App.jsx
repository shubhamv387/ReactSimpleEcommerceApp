import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop';
import Home from './pages/Home';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Auth';
import AuthContext from './store/auth-context';
import { useContext } from 'react';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const authCtx = useContext(AuthContext);

  const ProtectedRoute = ({ element }) =>
    !authCtx.isLoggedIn ? <Navigate to='/login' /> : element;

  const LoggedInRoute = ({ element }) =>
    authCtx.isLoggedIn ? <Navigate to='/store' /> : element;

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

      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<LoggedInRoute element={<Auth />} />} />
          <Route
            path='/forgot-password'
            // element={<ForgotPassword />}
            element={<LoggedInRoute element={<ForgotPassword />} />}
          />

          <Route
            path='/register'
            element={<LoggedInRoute element={<Auth />} />}
          />

          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          <Route
            path='/store'
            element={<ProtectedRoute element={<Shop />} />}
          />

          <Route
            path='/products/:productId'
            element={<ProtectedRoute element={<ProductDetails />} />}
          />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
