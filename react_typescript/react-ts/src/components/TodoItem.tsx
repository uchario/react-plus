import { FC } from "react";
import Todo from "../models/Todo";

import styles from './TodoItem.module.css';

const TodoItem: FC<{item: Todo, onRemoveTodo: () => void}> = (props) => {
    return(
        <li 
            className={`${styles.item}`}
            onClick={props.onRemoveTodo}
        >
            {props.item.text}
        </li>
    );
}

export default TodoItem;