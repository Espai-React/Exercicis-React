import React from "react";
/* import Message from "./Message"; */

/* const Tweet = (props) => {
  const message = "Hola Nois!";
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.age},</h4>
      <Message message={message} />
    </div>
  );
}; */

const Tweet = (props) => (
  <div>
    <h5>{props.name}, number: {props.number}</h5>
    <p>{props.tweet}</p>
  </div>
);

export default Tweet;
