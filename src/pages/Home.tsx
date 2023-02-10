import React, { useState } from "react";
import { sum } from "../sum";
import { AdminData } from "./AdminData";

 const Home = () => {
  const [isAdmin, setisAdmin] = useState(false);
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("../sum").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2+2
      </button>

      <br />
      <button onClick={() => setisAdmin(!isAdmin)}>Toggle Admin </button>
      {isAdmin ? <AdminData /> : <h2>Not admin</h2>}
    </div>
  );
};

export default Home