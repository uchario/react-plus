import { FormEvent } from "react";

const NewTodo = () => {
    const submitHandler = (event: FormEvent) => {
        event?.preventDefault();
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor={`text`}>Todo text</label>
            <input 
                type={`text`} 
                id={`text`}
                name={`text`}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodo;