import React from "react";
import "./Card.css"

export default function Card(Props) {
    return (
        <div className="card">
             <img src={Props.pic} alt=""/>
            <h2>{Props.title}</h2>
            <p>{Props.description}</p>
            <p>{Props.age}</p>
           
           
        </div>
    );
}