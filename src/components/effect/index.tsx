import React from "react"
import { Counter } from "./counter"

export const Effect = () => {
    return (
        <>
            <h2>Effect</h2>
            <h3>Prévention de redéfinition d'une méthode</h3>
            <Counter />
        </>
    )
}