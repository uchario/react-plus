import { NavLink } from "react-router-dom";

import styles from './MainNav.module.css';

const MainNav = () => {
    return(
        <header className={`${styles.header}`}>
            <nav>
                <ul className={`${styles.list}`}>
                    <li>
                        <NavLink 
                            to=''
                            className={({ isActive }) => 
                                isActive ? styles.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='products'
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;