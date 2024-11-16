import { Link, Route, Routes } from "react-router-dom";
import { Home, Main } from "./pages";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
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
