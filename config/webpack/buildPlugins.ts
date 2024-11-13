import { WebpackPluginInstance, ProgressPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new MiniCssExtractPlugin({ filename: "css/[name].[contenthash].css" }),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
