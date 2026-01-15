import React from "react";

function user() {
  const user = {
    name: "Jane",
    age: 25,
    city: "New York",
    country: "USA",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.city}</p>
      <p>{user.country}</p>
      <img src={user.imageUrl} alt="Profile" style={{ width: user.imageSize }} />
    </div>
  );
}

export default user;
