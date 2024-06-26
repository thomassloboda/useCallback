import { useState } from "react"

export const useCounter = (initialCount = 0) => {
    const [counter, setCounter] = useState<number>(initialCount);

    return {
        counter,
        increment: (amount = 1) => setCounter(() => counter + amount),
        decrement: (amount = 1) => setCounter(() => counter - amount)
    };
};
