import type { BuildOptions } from "./types/types";
import type { Configuration } from "webpack";

export default function buildResolvers(options: BuildOptions): Configuration["resolve"] {
    const {
        paths: {
            assets,
            components,
            config,
            controllers,
            libs,
            models,
            stores,
        },
    } = options;

    return {
        alias: {
            "@assets": assets,
            "@components": components,
            "@config": config,
            "@controllers": controllers,
            "@libs": libs,
            "@models": models,
            "@stores": stores,
        },
        extensions: [".tsx", ".jsx", ".ts", ".js"],
    };
}