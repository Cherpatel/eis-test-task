import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders/buildLoaders";
import buildPlugins from "./buildPlugins/buildPlugins";
import buildResolvers from "./buildResolvers";

import type { BuildOptions } from "./types/types";
import type webpack from "webpack";

export default function webpackBuild(options: BuildOptions): webpack.Configuration {
    const {
        isDev,
        mode,
        paths,
    } = options;

    return {
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev && "inline-source-map",
        entry: paths.entry,
        mode,
        module: { rules: buildLoaders(options) },
        output: {
            clean: true,
            filename: "[name].[contenthash].js",
            path: paths.output,
        },
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
    };
}