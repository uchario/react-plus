import { useEffect, useState } from "react";

let globalState = {},
    listeners = [],
    actions = {};

const useStore = () => {
    const setState = useState(globalState)[1];

    useEffect(() => {
        listeners.push(setState);

        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState]);
}