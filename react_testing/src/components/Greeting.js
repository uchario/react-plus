import { useState } from "react";

const Greeting = () => {
    const [changeText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return(
        <>
            <h1>Hello World!</h1>
            {!changeText && <p>It's good to see you</p>}
            {changeText && <p>Changed!</p>}
            <button onClick={changeTextHandler}>Change text</button>
        </>
    );
}

export default Greeting;