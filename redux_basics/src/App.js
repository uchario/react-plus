import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

import { authActions } from './store/auth';

function App() {
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <Fragment>
      <Header onLogout={logoutHandler}/>
      {!state.isAuthenticated && <Auth/>}
      {state.isAuthenticated && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
