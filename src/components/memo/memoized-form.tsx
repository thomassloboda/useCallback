import React, { memo } from "react"

type MemoizedFormProps = {
    handleSubmit: (evt: React.FormEvent) => void
}

export const MemoizedForm = memo(({ handleSubmit }: MemoizedFormProps) => {
    console.log('MemoizedForm rendered');
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Memoized email:</label>
            <input type="email" name="email" />
            <button type="submit">Envoyer</button>
            <small>rendu à {new Date().toLocaleTimeString()}</small>
        </form>
    )
});