import React from "react";
import { useCounter } from "../../hooks/use-counter";
import { CounterForm } from "./counter-form";

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
            <CounterForm count={counter}/>
        </>
    )
}