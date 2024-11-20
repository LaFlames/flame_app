import { RouteProps } from "react-router-dom";
import { Home, Main } from "pages";

export enum AppRoutes {
  Home = "home",
  Main = "main",
}

export const routePaths: Record<AppRoutes, string> = {
  [AppRoutes.Home]: "/",
  [AppRoutes.Main]: "/main",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.Home]: {
    path: routePaths[AppRoutes.Home],
    element: <Home />,
  },
  [AppRoutes.Main]: {
    path: routePaths[AppRoutes.Main],
    element: <Main />,
  },
};
