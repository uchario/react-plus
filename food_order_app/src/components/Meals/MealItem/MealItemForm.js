import React, { useRef, useState } from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitFormHanlder = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 
            || enteredAmount < 1 
            || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);
    }

    return (
        <form className={`${styles.form}`} onSubmit={submitFormHanlder}>
            <Input 
                ref={amountInputRef}
                id={props.id}
                label='Amount'
                input={{ 
                    placeholder: '',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    id: `${props.id}`,
                    defaultValue: 1,
                 }}
            />
            <Button 
                type='submit'
                value='+ Add'
            />
            <span className={`${!amountIsValid && styles.error}`}>Invalid amount</span>
        </form>
    );
};

export default MealItemForm;