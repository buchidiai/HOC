import React from "react";

import UserProfile from "./components/user-profile";
import UserList from "./components/user-list";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserList
        start={3}
        end={6}
        dataSource="https://jsonplaceholder.typicode.com/users"
      />
      <UserProfile
        start={0}
        end={2}
        dataSource="https://jsonplaceholder.typicode.com/posts"
      />
    </div>
  );
}

export default App;
