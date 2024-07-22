import { dotenvPluginInstance } from "./dotenvPluginInstance";
import { forkTsCheckerWebpackPluginInstance } from "./forkTsCheckerWebpackPlugin";
import { htmlWebpackPluginInstance } from "./htmlWebpackPlugin";
import { miniCssExtractPluginInstance } from "./miniCssExtractPlugin";
import { reactRefreshWebpackPluginInstance } from "./reactRefreshWebpackPlugin";

import type { BuildOptions } from "@config/build/types/types";
import type { Configuration } from "webpack";

export default function buildPlugins(options: BuildOptions): Configuration["plugins"] {
    const {
        isDev, isProd,
    } = options;

    const plugins: Configuration["plugins"] = [
        htmlWebpackPluginInstance(options),
        dotenvPluginInstance(options),
    ];

    if (isProd) {
        const prodPlugins = [ miniCssExtractPluginInstance() ];

        plugins.push(...prodPlugins);
    }

    if (isDev) {
        const devPlugins = [
            forkTsCheckerWebpackPluginInstance(),
            reactRefreshWebpackPluginInstance(),
        ];

        plugins.push(...devPlugins);
    }

    return plugins;
}