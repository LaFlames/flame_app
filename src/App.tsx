import { Link, Route, Routes } from "react-router-dom";
import { Home, Main } from "./pages";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
