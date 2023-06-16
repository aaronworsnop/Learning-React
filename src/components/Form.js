import React, { useState } from 'react';

function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        
        // Validate
        if (username.trim() === '' || password.trim() === '') {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={submit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="text" value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>
                {!isValid && <p>Please enter a valid username and password.</p>}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Form;