import React from "react";

function user() {
  const user = {
    name: "Jane",
    age: 25,
    city: "New York",
    country: "USA",
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.age}</p>
      <p>{user.city}</p>
      <p>{user.country}</p>
    </div>
  );
}

export default user;
