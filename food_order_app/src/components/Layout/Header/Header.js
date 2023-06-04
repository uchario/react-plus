import React, {Fragment} from 'react';

import CartButton from './CartButton';

import styles from './Header.module.css';

import mealsImg from '../../../assets/img/meals.jpg';

const Header = (props) => {
    return(
        <Fragment>
            <header className={`${styles.header}`}>
                <h1>React Meals</h1>
                <CartButton
                    onClick={props.onShowCart}
                />
            </header>
            <div className={`${styles['main-image']}`}>
                <img src={mealsImg} alt='food-img'/>
            </div>
        </Fragment>
    );
}

export default Header;