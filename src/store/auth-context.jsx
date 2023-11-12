import React, { useState } from 'react';

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

  const [token, setToken] = useState(initialToken);

  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, userEmail) => {
    localStorage.setItem('token', token);
    setToken(token);

    const newUserEmail = userEmail.replace(/@/g, '').replace(/\./g, '');

    localStorage.setItem('userEmail', newUserEmail);
    setUserEmail(newUserEmail);
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
