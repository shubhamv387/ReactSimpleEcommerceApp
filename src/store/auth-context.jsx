import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AuthContext = React.createContext({
  token: null,
  userEmail: null,
  isLoggedIn: false,
  login: (token, userEmail) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const initialUserEmail = localStorage.getItem('userEmail');
  const timeAtTokenCreated = localStorage.getItem('expiresIn');

  const [token, setToken] = useState(initialToken);

  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const userIsLoggedIn = !!token;

  const timer = 30 * 60 * 1000;

  const tokenExpireHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('expiresIn');
    setToken(null);
    toast.error('Session expired! Login Again', { position: 'top-center' });
  };

  useEffect(() => {
    if (Object.keys(localStorage).indexOf('expiresIn') !== -1) {
      if (Date.now() - timer <= timeAtTokenCreated) {
        setTimeout(() => {
          tokenExpireHandler();
        }, timer - (Date.now() - timeAtTokenCreated));
      } else {
        tokenExpireHandler();
      }
    }
  }, []);

  const loginHandler = (token, userEmail) => {
    localStorage.setItem('token', token);
    setToken(token);

    const newUserEmail = userEmail.replace(/@/g, '').replace(/\./g, '');

    localStorage.setItem('userEmail', newUserEmail);
    setUserEmail(newUserEmail);
    localStorage.setItem('expiresIn', Date.now());
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    setToken(null);
    setUserEmail(null);
  };

  const authContext = {
    token: token,
    userEmail: userEmail,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
