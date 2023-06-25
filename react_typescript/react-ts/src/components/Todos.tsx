import { FC } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from './Todos.module.css';

const Todos: FC<{items: Todo[]}> = (props) => {
    return(
        <ul className={`${styles.todos}`}>
            {props.items.map((item) => (
                <TodoItem item={item}/>
            ))}
        </ul>
    );
}

export default Todos;