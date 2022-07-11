import React from "react";
import "./HobbiesItem.css";

function HobbiesItem(props) {
  return (
    <div className="hobbiesItem__div">
      <img src={props.img} id='hobbies__img' />
      <h3>{props.title}</h3>
      <p>{props.des}</p>
    </div>
  );
}

export default HobbiesItem;
