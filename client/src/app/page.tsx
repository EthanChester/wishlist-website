"use client";

import axios from "axios";

//data will be the string we send from our server
const apiCall = () => {
    axios.get("http://localhost:8080").then((data) => {
        //this console.log will be in our frontend console
        console.log(data);
    });
};

export default function App() {
    return (
        <div className="App">
            <button onClick={apiCall}>Make API Call</button>
        </div>
    );
}
