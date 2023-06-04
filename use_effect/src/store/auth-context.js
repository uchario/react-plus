import React, { useEffect, useState, createContext } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
       const storedUserLogin = localStorage.getItem('isLoggedIn');
  
      if(storedUserLogin === '1') {
        console.log('set isLoggedIn');
        setIsLoggedIn(true);
      }
    },  [isLoggedIn]);
  
    const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
  
    const logoutHandler = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
    };

    return (
        <AuthContext.Provider
            value={{ 
                isLoggedIn: isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler
             }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;