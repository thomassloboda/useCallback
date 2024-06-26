import React from "react";
import { useCounter } from "../../hooks/use-counter";
import { Posts } from "./posts";

export const Counter = () => {
    const {
        counter,
        increment,
        decrement
    } = useCounter();

    return (
        <>
            <button onClick={() => decrement()}>-</button>
            {counter}
            <button onClick={() => increment()}>+</button>
            <Posts count={counter} />
        </>
    )
}