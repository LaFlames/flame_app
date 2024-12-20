import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types";

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    alias: {},
  };
};
