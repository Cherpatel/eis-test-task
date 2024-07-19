import fs from "fs";

import HtmlWebpackPlugin from "html-webpack-plugin";

import type { BuildOptions } from "@config/build/types/types";

export function htmlWebpackPluginInstance(options: BuildOptions) {
    const {
        paths: {
            favicon,
            html,
        },
    } = options;

    const isFaviconExists = fs.existsSync(favicon);

    return new HtmlWebpackPlugin({
        ...(isFaviconExists && { favicon }),
        publicPath: "/",
        template: html,
    });
}