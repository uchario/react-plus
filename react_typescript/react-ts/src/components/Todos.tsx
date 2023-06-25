import { FC, useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

import styles from './Todos.module.css';

const Todos: FC = () => {
    const todosCtx = useContext(TodosContext);

    return(
        <ul className={`${styles.todos}`}>
            {todosCtx.items.map((item) => (
                <TodoItem 
                    item={item}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
}

export default Todos;