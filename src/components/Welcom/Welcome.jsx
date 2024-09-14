import React from "react";

export default function Welcome(props) {
    return (
        <div>
            <h1>Hello,{props.name}</h1>
            <p>Age: {props.age}</p>
            <button onClick={() => showGender()}>View</button>
        </div>
    );
}