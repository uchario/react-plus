import classes from './Header.module.css';

import { useSelector } from 'react-redux';

const Header = (props) => {
  const state = useSelector(state => state.auth);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {state.isAuthenticated &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
