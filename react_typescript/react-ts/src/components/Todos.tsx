import { FC } from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const Todos: FC<{items: Todo[]}> = (props) => {
    return(
        <ul>
            {props.items.map((item) => (
                <TodoItem item={item}/>
            ))}
        </ul>
    );
}

export default Todos;