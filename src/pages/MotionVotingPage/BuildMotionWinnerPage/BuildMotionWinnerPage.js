import React from "react";
import { useHistory } from 'react-router-dom';
export default function BuildMotionWinnerPage () {
    const history = useHistory();
    const handleClick = () => history.push('/');
    
    return (
        <div>
            <h1>Winner: </h1>
            <br></br>
            <h1>Jimmy Johns</h1>
            <button type="button" onClick={handleClick}>
            Goodbye
            </button>
        </div>
        
    );
}