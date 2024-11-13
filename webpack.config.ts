import path from "path";
import { BuildEnv, buildWebpackConfig } from "./config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    isDev,
    port,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      build: path.resolve(__dirname, "build"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
  });
};
