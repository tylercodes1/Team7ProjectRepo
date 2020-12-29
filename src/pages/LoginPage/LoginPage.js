import React, { useState } from 'react';
// import { login } from '../../api/api';
import CreateNewUserPage from '../CreateNewUserPage/CreateNewUserPage';
import './LoginPage.css';

function LoginPage() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const doLogin = async(e) => {
        e.preventDefault();
        // try{
        //     await login(formData.username, formData.password);
        //     console.log("clicked");
        // }catch {
        //     console.log("couldn't login");
        // }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    
    return (
        <>
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={doLogin}>
                <input type='text' name="username" placeholder="username" value={formData['username']} onChange={handleChange}/>
                <input type='text' name="password" placeholder="password" value={formData['password']} onChange={handleChange}/>
                <input type='submit' value="Login" />
            </form>

        </div>
        </>
    )
}

export default LoginPage;