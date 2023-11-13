import { Suspense, lazy, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from './store/auth-context';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import About from './pages/About';
const About = lazy(() => import('./pages/About.jsx'));
// import Shop from './pages/Shop';
const Shop = lazy(() => import('./pages/Shop.jsx'));
// import Home from './pages/Home';
const Home = lazy(() => import('./pages/Home.jsx'));
// import RootLayout from './pages/RootLayout';
const RootLayout = lazy(() => import('./pages/RootLayout.jsx'));
// import ErrorPage from './pages/ErrorPage';
const ErrorPage = lazy(() => import('./pages/ErrorPage.jsx'));
// import Contact from './pages/Contact';
const Contact = lazy(() => import('./pages/Contact.jsx'));
// import ProductDetails from './pages/ProductDetails';
const ProductDetails = lazy(() => import('./pages/ProductDetails.jsx'));
// import Auth from './pages/Auth';
const Auth = lazy(() => import('./pages/Auth.jsx'));
// import ForgotPassword from './pages/ForgotPassword';
const ForgotPassword = lazy(() => import('./pages/ForgotPassword.jsx'));

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
        style={{ width: '100%', maxWidth: '350px' }}
      />

      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <RootLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path='/login'
            element={
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Auth />
                  </Suspense>
                }
              />
            }
          />
          <Route
            path='/forgot-password'
            // element={<ForgotPassword />}
            element={
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <ForgotPassword />
                  </Suspense>
                }
              />
            }
          />

          <Route
            path='/register'
            element={
              <LoggedInRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Auth />
                  </Suspense>
                }
              />
            }
          />

          <Route
            path='/contact'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='/about'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <About />
              </Suspense>
            }
          />

          <Route
            path='/store'
            element={
              <ProtectedRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <Shop />
                  </Suspense>
                }
              />
            }
          />

          <Route
            path='/products/:productId'
            element={
              <ProtectedRoute
                element={
                  <Suspense fallback={<p>Loading...</p>}>
                    <ProductDetails />
                  </Suspense>
                }
              />
            }
          />

          <Route
            path='*'
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <ErrorPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
