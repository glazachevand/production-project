import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    // пути для абсолютных импортов
    modules: [options.paths.src, "node_modules"],
    // главный файл для каждого модуля
    mainFiles: ["index"],
    alias: {},
  };
}
