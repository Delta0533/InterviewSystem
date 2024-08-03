import React, { useState } from 'react';
import './Login.css'; // Import CSS file

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <select className="select select-secondary w-full max-w-xs">
                    <option disabled selected>Pick your Username</option>
                    <option>ควย1</option>
                    <option>ควย2</option>
                    <option>ควย3</option>
                    <option>ควย4</option>
                    <option>ควย5</option>
                    <option>ควย6</option>
                    <option>ควย7</option>
                    <option>ควย8</option>
                </select>
            </form>
        </div>
    );
}