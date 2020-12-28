import React from 'react';
import './LoginPage.css';

function LoginPage() {
    return (
        <div className="login-page">
            <h1>Login</h1>
            <form>
                <input type='text' name="username" placeholder="username" />
                <input type='text' name="password" placeholder="password" />
                <input type='submit' value="Login" />
            </form>

        </div>
    )
}

export default LoginPage;