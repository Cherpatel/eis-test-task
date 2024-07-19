import path from "path";

import buildWebpack from "./config/build/buildWebpack";

import type { BuildPaths, BuildMode } from "./config/build/types/types";

type Env = {
    mode: BuildMode;
    port: number;
};

export default (env: Env) => {
    const {
        mode = "development",
        port = 3000,
    } = env;

    const paths: BuildPaths = {
        assets: path.resolve(__dirname, "src", "assets"),
        components: path.resolve(__dirname, "src", "components"),
        config: path.resolve(__dirname, "config"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
        html: path.resolve(__dirname, "public", "index.html"),
        output: path.resolve(__dirname, "build"),
    };

    const isProd = mode === "production";
    const isDev = mode === "development";

    const config = buildWebpack({
        isDev,
        isProd,
        mode,
        paths,
        port,
    });

    return config;
};