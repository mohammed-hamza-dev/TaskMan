
import React, { useState } from 'react'


export default function Login({ onLogin, onSignup }) {


    const [email, setEmail] = useState('')


    const [password, setPassword] = useState('')


    const [error, setError] = useState('')



    // Function to handle login
    const handleLogin = () => {

        const users = JSON.parse(localStorage.getItem('users')) || []

        const user = users.find(
            (user) => user.email === email && user.password === password
        )

        if (user) {
            onLogin()
        } else {
            setError('Invalid email or password')
        }
    }

    return (

        <div>


            <h2>Login</h2>


            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />


            <br />
            <br />


            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />


            <br />
            <br />


            <button onClick={handleLogin}>Login</button>
            <button onClick={onSignup}>Create an account</button>
            {error && <p>{error}</p>}



        </div>
    )
}