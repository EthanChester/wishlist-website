"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { loginObjectType } from "@/types";

const loginApiCall = (loginData: loginObjectType) => {
    // TODO add encryption
    axios({
        method: "post",
        url: "http://localhost:8080/login",
        data: loginData,
        withCredentials: true
    })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
};

export default function Page() {
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    return (
        <div>
            <h1>Login</h1>

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
                        loginApiCall({
                            email: emailValue,
                            password: passwordValue,
                        })
                    }
                >
                    Sign in
                </button>
                <p>
                    Don't have an account? <Link href={"/signup"}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}
