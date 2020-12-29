import React from 'react';
import './LoginPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions/actionTypes';
import "../CreateNewUserPage/CreateNewUserPage.css";

function LoginPage() {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div>
            { isLogged ?
                <div className="login-page">
                    <h1>Login</h1>
                    <h1 onClick={() => dispatch(login())}>Sign-up</h1>
                    <form >
                        <input type='text' name="username" placeholder="username" />
                        <input type='text' name="password" placeholder="password" />
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
    export default LoginPage;