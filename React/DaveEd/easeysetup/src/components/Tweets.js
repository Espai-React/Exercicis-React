import React from "react";
import Tweet from "./Tweet";

/* const Tweets = (props) => {
  const date = new Date().toLocaleDateString();
  console.log(date);
  return (
    <section>
      <p>Date: {date}</p>
      <Tweet name={props.name} age={props.age} />
    </section>
  );
}; */

const Tweets = (props) => {
  const tweets = [
    { name: "Deved", tweet: "uuuugh! I need a beer!" },
    { name: "James", tweet: "uuuugh! I need a coffee!" },
    { name: "Mary", tweet: "uuuugh! I need a break!" },
    { name: "John", tweet: "uuuugh! I need an infusion!" },
    { name: "Anne", tweet: "uuuugh! I need a vacation!" },
  ];

  return (
    <section>
      <button onClick={props.setToggle}>Clica!</button>
      {tweets.map((tweet) => (
        <Tweet name={tweet.name} tweet={tweet.tweet} number={props.number} />
      ))}
    </section>
  );
};

export default Tweets;
