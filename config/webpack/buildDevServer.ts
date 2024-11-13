import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types";

export const buildDevServer = (options: BuildOptions): Configuration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
};
