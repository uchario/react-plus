import React, { useRef, useState } from 'react';

import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isNotFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = !isNotFiveChars(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormValidity({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });

        const formIsValid = enteredNameIsValid && 
                            enteredStreetIsValid && 
                            enteredPostalIsValid && 
                            enteredCityIsValid;

        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            enteredName,
            enteredStreet,
            enteredPostal,
            enteredCity,
        })
    };

    const nameControlClasses = `${styles.control} ${!formValidity.name && styles.invalid}`;
    const streetControlClasses = `${styles.control} ${!formValidity.street && styles.invalid}`;
    const postalControlClasses = `${styles.control} ${!formValidity.postal && styles.invalid}`;
    const cityControlClasses = `${styles.control} ${!formValidity.city && styles.invalid}`;

    return(
        <form onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input ref={nameInputRef} type='text' id='name'/>
                {!formValidity.name && <span>Enter a valid name</span>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor='street'>Street</label>
                <input ref={streetInputRef} type='text' id='street'/>
                {!formValidity.street && <span>Enter a valid street</span>}
            </div>
            <div className={postalControlClasses}>
                <label htmlFor='postal'>Postal code</label>
                <input ref={postalInputRef} type='text' id='postal'/>
                {!formValidity.postal && <span>Enter a valid postal code</span>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city'/>
                {!formValidity.city && <span>Enter a valid city</span>}
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;