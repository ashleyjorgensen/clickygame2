import React from "react";
import "./PuppyCard.css";
const PuppyCard = props => (
  <div
    className="card"
    id={props.id}
    onClick={() => props.handleClick(props.id)}
  >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PuppyCard;