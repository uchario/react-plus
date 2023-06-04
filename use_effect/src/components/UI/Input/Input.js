import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();
    
    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
        return {
            activate: activate
        }
    });
    return (
        <input
            ref={inputRef}
            className={`${props.className}`}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    );
});

export default Input;