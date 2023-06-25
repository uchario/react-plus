import { FC, FormEvent, useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";

import styles from './NewTodo.module.css';

const NewTodo: FC = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }

        todosCtx.addTodo(enteredText);
    }

    return(
        <form 
            onSubmit={submitHandler}
            className={`${styles.form}`}
        >
            <label htmlFor={`text`}>Todo text</label>
            <input 
                type={`text`} 
                id={`text`}
                name={`text`}
                ref={todoTextInputRef}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;