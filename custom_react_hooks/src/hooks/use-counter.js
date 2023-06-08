import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
           switch (forwards) {
            case true:
                setCounter((prevCounter) => prevCounter = prevCounter + 1);
                break;
            case false:
                setCounter((prevCounter) => prevCounter = prevCounter - 1);
                break;
            default:
                return;
           }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
}

export default useCounter;