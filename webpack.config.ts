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
        controllers: path.resolve(__dirname, "src", "controllers"),
        entry: path.resolve(__dirname, "src", "index.tsx"),
        env: path.resolve(__dirname, ".env"),
        favicon: path.resolve(__dirname, "public", "favicon.ico"),
        html: path.resolve(__dirname, "public", "index.html"),
        libs: path.resolve(__dirname, "src", "libs"),
        models: path.resolve(__dirname, "src", "models"),
        output: path.resolve(__dirname, "build"),
        stores: path.resolve(__dirname, "src", "stores"),
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