import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changeText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return(
        <>
            <h1>Hello World!</h1>
            {!changeText && <Output>It's good to see you</Output>}
            {changeText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change text</button>
        </>
    );
}

export default Greeting;