import type { RuleSetRule } from "webpack";

export function sourcemapLoader(): RuleSetRule {
    return {
        enforce: "pre",
        loader: "source-map-loader",
        test: /\.(js|jsx|ts|tsx)$/,
    };
}