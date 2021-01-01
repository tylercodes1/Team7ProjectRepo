import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from "react-icons";
import { reject } from '../../store/actions/suggestionTypes';
import { accept } from '../../store/actions/suggestionTypes';


export default function ReduxTestComponent() {
    // test for redux
    const isAccept = useSelector(state=> state.isAccept);
    const dispatch = useDispatch();
    console.log(isAccept.status)
    // isAccept is from /store/actions/index.js
    return (
        <div>
            {(()=> {
                switch (isAccept.status) {
                    case 'Accept':
                        return(
                            <div><h1>this is Accept</h1> </div>
                        )
                    case 'Reject' :
                        return (
                            <div><h1>this is reject</h1> </div>
                        )
                    default:
                        return (
                            <div><h1>this is pending</h1> </div>    
                        )
                }


            })()}
            <button
                className="welcome-message-button"
                // test for redux
                onClick={() => dispatch(reject())}
            ><IconContext.Provider
                value={{
                    size: "35px",
                }}
            >
                </IconContext.Provider>Reject Test
            </button>
            <button
                className="welcome-message-button"
                // test for redux
                onClick={() => dispatch(accept())}
            ><IconContext.Provider
                value={{
                    size: "35px",
                }}
            >
                </IconContext.Provider>Accept Test
            </button>
        </div>
    )

}
