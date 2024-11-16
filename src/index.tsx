import { render } from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/Provider";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
