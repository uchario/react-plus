import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';

import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = (yearValue) => {
        setFilteredYear(yearValue);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let content = <p className='empty-content'>No expenses found!</p>;

    if(filteredExpenses.length > 0) {
        content = filteredExpenses.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
    }

    return(
        <Card className="expenses">
            <ExpenseFilter 
                onFilterYear={filterYearHandler}
                selected={filteredYear}
            />
            <ExpensesChart 
                expenses={filteredExpenses}
            />
            <h2>Let's get started!</h2>
            {content}
        </Card>
    );
}

export default Expenses;