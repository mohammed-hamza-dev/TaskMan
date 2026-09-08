import React, { useState } from 'react'

export default function Signup({ onBackToLogin }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')


    const handleSignup = () => {

        // Validate email and password
        if (email === '' || password === '') {
            alert('Please enter email and password')
            return
        }

        // Validate email format
        if (password.length < 5) {
            alert('Password must be at least 5 characters')
            return
        }

        // Save user credentials to localStorage

        const users = JSON.parse(localStorage.getItem('users')) || []

        const newUser = {
            email: email,
            password: password
        }

        const updatedUsers = [...users, newUser]

        localStorage.setItem('users', JSON.stringify(updatedUsers))

        setSuccess('Account created successfully!')

        setEmail('')
        setPassword('')

        setTimeout(() => {
            onBackToLogin()
        }, 1500)

        console.log('User account created')
    }


    return (
        <div>
            <h2>Signup</h2>

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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />
            <br />

            <button onClick={handleSignup}>Signup</button>
            <button onClick={onBackToLogin}>Back to Login</button>
            {success && <p>{success}</p>}
        </div>
    )
}