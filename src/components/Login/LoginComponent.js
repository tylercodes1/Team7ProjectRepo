import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/actions/actionTypes';
import { IconContext } from "react-icons";

export default function LoginComponent() {
    // test for redux
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
    // test for redux 
    return (
        <div>
            { isLogged ? <h1>Loged in successfully</h1> : <h1>Please login.</h1>
            }
            <button
                className="welcome-message-button"
                // test for redux
                onClick={() => dispatch(login())}
            ><IconContext.Provider
                value={{
                    size: "35px",
                }}
            >
                </IconContext.Provider>Redux Test
            </button>
        </div>
    )

}
