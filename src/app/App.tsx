import { Link } from "react-router-dom";
import { classnames } from "shared/lib";
import { Router, useTheme } from "../app/providers";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classnames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Router />
    </div>
  );
};

export default App;
