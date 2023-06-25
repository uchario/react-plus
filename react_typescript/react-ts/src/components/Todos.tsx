import { FC } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from './Todos.module.css';

const Todos: FC<{items: Todo[], onRemoveTodo: (id: string) => void}> = (props) => {

    return(
        <ul className={`${styles.todos}`}>
            {props.items.map((item) => (
                <TodoItem 
                    item={item}
                    onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;