import type { BuildOptions } from "./types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const { port } = options;

    return {
        historyApiFallback: true,
        hot: true,
        open: true,
        port,
    };
}