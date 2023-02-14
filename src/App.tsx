import { lazy, useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { lazyLoad } from "./utils/lazyLoad";
import "./App.css";


// const Home = lazy(() => import("./pages/Home")); // default lazy
// const About = lazy(() =>
//   import("./pages/About").then((module) => {
//     return { default: module.About };
//   })
// ); not default 

// const About2 = lazy(() =>
//   import("./pages/About").then((module) => {
//     return { default: module.About2 };
//   })
// );


const Home = lazyLoad("../pages/Home") // default
const About = lazyLoad("../pages/About",'About') // not default 
const Store = lazyLoad("../pages/Store",'Store')



function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Route>
    </Routes>
  );
}

function NavWrapper() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
