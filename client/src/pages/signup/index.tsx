"use client";

import axios from "axios";
import { loginObjectType } from "../../types";
import { useState } from "react";

const createAccountApiCall = (loginObject: loginObjectType) => {
    //TODO add encryption
    axios({
        method: "post",
        url: "http://localhost:8080/create-account",
        data: loginObject,
        withCredentials: true
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
};

export default function Page() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
        <div>
            <h1>Create Account</h1>

            <div>
                <input
                    type="text"
                    id="email"
                    placeholder="eg. john@mail.com"
                    value={emailValue}
                    onChange={(e) => {
                        setEmailValue(e.currentTarget.value);
                    }}
                />
                <label htmlFor="email">Email</label>

                <input
                    type="password"
                    id="password"
                    value={passwordValue}
                    onChange={(e) => {
                        setPasswordValue(e.currentTarget.value);
                    }}
                />
                <label htmlFor="password">Password</label>

                <button
                    onClick={() =>
                        createAccountApiCall({
                            email: emailValue,
                            password: passwordValue,
                        })
                    }
                >
                    Sign Up!
                </button>
            </div>
        </div>
    );
}
