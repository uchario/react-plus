import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const submitExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    };

    const showFormHandler = () => {
        setShowForm((prevValue) => {
            return !prevValue;
        });
    };

    let content = !showForm && <button onClick={showFormHandler}>Add Expense</button>;
    if(showForm) {
        content =   <ExpenseForm 
                        onSubmitExpenseData={submitExpenseDataHandler}
                        onToggleForm={showFormHandler}
                    />
    }

    return (
        <div className='new-expense'>
            {content}
        </div>
    );
};

export default NewExpense;