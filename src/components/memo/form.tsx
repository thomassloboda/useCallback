import React from "react"

type FormProps = {
    handleSubmit: (evt: React.FormEvent) => void
}

export const Form = ({ handleSubmit }: FormProps) => {
    console.log('Form rendered');
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
            <button type="submit">Envoyer</button>
            <small>rendu à {new Date().toLocaleTimeString()}</small>
        </form>
    )
}