import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // открывать в браузере автоматически
    open: true,
    // для правильного обновления не главных страниц
    historyApiFallback: true,
    hot: true,
  };
}
