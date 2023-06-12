import { Outlet } from 'react-router-dom';

import MainNav from '../components/MainNav';

import styles from './Root.module.css';

const Root = () => {
    return(
        <div className={`${styles.main}`}>
            <MainNav/>
            <Outlet/>
        </div>
    );
}

export default Root;