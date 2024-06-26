import React, { FormEvent, useCallback } from "react";
import { Form } from "./form";
import { MemoizedForm } from "./memoized-form";


type CounterFormProps = {
    count: number
}

export const CounterForm = ({ count }: CounterFormProps) => {
    const handleSubmit = (evt: FormEvent) => {
        console.log('Sending form');
        evt.preventDefault();
    };

    const handleSubmit2 = useCallback((evt: FormEvent) => {
        console.log('Sending memoized form');
        evt.preventDefault();
    }, []);

    return (
        <>
            <p>Sending counter value {count}</p>
            <Form handleSubmit={handleSubmit} />
            <MemoizedForm handleSubmit={handleSubmit2} />
        </>
    )
}