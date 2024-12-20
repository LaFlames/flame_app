import { render } from "react-dom";
import "app/styles/index.scss";
import { App } from "app";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers";

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
