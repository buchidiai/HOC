import React from "react";

import withData from "../with-data";

const UserProfile = ({ data }) => (
  <div className="container">
    <h1> Users Profile </h1>
    Posts:
    {data.map(post => (
      <div className="post" key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);

export default withData(UserProfile);
