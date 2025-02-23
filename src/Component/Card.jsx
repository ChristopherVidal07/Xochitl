import React from "react";

function Card(props) {
  return (
    <div className="card" id="Experience">
      <div>
        <img className="imgCard" src={props.img} alt="omg" />
      </div>
      <h2>{props.name}</h2>
      <ul>
        <li>{props.listOne}</li>
      </ul>
    </div>
  );
}

export default Card;
