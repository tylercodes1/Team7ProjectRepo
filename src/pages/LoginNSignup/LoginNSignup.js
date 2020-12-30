import React, {useState}from 'react';
import {Login} from '../../api/api';
import './LoginNSignup.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions/actionTypes';

function LoginNSignup() {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const doLogin = async(e) => {
        e.preventDefault();
        try{
            await Login(formData.username, formData.password);
            console.log("clicked");
        }catch {
            console.log("couldn't login");
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            { isLogged ?
                <div className="login-page">
                    <h1>Login</h1>
                    <h1 onClick={() => dispatch(login())}>Sign-up</h1>
                    <form onSubmit={doLogin}>
                        <input type='text' name="username" placeholder="username" value={formData['username']} onChange={handleChange}/>
                        <input type='text' name="password" placeholder="password" value={formData['password']} onChange={handleChange}/>
                        <input type='submit' value="Login" />
                    </form>

                </div> :

                <div className="newuser-page">
                    <h1 onClick={() => dispatch(login())}>Login</h1>
                    <h1> Sign-Up</h1>
                    <form >
                        <input type='text' name="username" placeholder="username" />
                        <input type='text' name="password" placeholder="password" />
                        <input type='text' name="confirm-password" placeholder="confirm-password" />
                        <input type='submit' value="Create User" />
                    </form>
                </div>
            }
        </div>
    )

        }
    export default LoginNSignup;