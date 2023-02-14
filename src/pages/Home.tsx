import React, { lazy, Suspense, useState, useTransition } from "react";
import { sum } from "../sum";
// import { AdminData } from "./AdminData";

const AdminData = lazy(() =>
  import("./AdminData").then(({ AdminData }) => {
    return { default: AdminData };
  })
);

const Home = () => {
  const [isAdmin, setisAdmin] = useState(false);
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          import("../sum").then(({ sum }) => {
            alert(sum(2, 1));
          });
        }}
      >
        Add 2+2
      </button>

      <br />
      <button
        onClick={() => {
          startTransition(() => {
            setisAdmin(!isAdmin);
          });
        }}
      >
        Toggle Admin
      </button>
      {isPending &&  'LoadingFromTransition...'}
      <Suspense fallback={<h2>Loanding...</h2>}>
        {isAdmin ? <AdminData /> : <h2>Not admin</h2>}
      </Suspense>
    </div>
  );
};

export default Home;
