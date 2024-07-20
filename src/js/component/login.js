import React, { useState, useContext } from 'react';
import { Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export function Login() {
    const { actions, store } = useContext(Context)

    return (
        <h1>
            <p>Login View</p>
            {store.isLoggedIn ?
                <Redirect to={"/Contacts"} />
                :
                <p>You are not logged in</p>
            }
            <button onClick={() => actions.login()}>Fake Login</button>
        </h1>
    );
} 