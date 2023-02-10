import { lazy, useState, Suspense } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
// React.lazy()
const Home = lazy(() => import("./pages/Home"));

function App() {
  const [count, setCount] = useState(0);

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
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
