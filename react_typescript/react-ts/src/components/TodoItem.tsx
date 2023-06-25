import { FC } from "react";
import Todo from "../models/Todo";

import styles from './TodoItem.module.css';

const TodoItem: FC<{item: Todo}> = (props) => {
    return(
        <li className={`${styles.item}`}>{props.item.text}</li>
    );
}

export default TodoItem;