import { FC } from "react";
import Todo from "../models/Todo";

const TodoItem: FC<{item: Todo}> = (props) => {
    return(
        <li>{props.item.text}</li>
    );
}

export default TodoItem;