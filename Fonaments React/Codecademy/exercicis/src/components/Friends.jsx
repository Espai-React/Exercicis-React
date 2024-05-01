import React from "react";

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg",
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg",
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg",
  },
];

const Friends = () => (
  <div>
      <h2>Hola</h2>
    <ul>
      {friends.map((friend, index) => (
        <div key={index}>
          <li>{friend.title}</li>
          <img width="200px" alt="" src={friend.src} />
        </div>
      ))}
    </ul>
  </div>
);

export default Friends;
