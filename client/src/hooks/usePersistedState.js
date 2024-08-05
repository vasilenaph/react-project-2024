import { useState } from "react";

export default function usePersitedState(key, initialState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return typeof initialState === 'function'
            ? initialState()
            : initialState
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });

    const updateState = (value) => {

        const newState = typeof value === 'function'
        ? value(state)
        : value

        localStorage.setItem(key, JSON.stringify(newState));
        
        setState(value);
    }

    return [state, updateState]
}