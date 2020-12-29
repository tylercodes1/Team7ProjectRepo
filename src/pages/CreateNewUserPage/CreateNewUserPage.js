import React from 'react';
import './CreateNewUserPage.css';

function CreateNewUserPage() {
    return (
        <div className="newuser-page">
            <h1>Create New User</h1>
            <form>
                <input type='text' name="username" placeholder="username" />
                <input type='text' name="password" placeholder="password" />
                <input type='text' name="confirm-password" placeholder="confirm-password" />
                <input type='submit' value="Create New User" />
            </form>

        </div>
    )
}

export default CreateNewUserPage;