import type { RuleSetRule } from "webpack";

export function svgrLoader(): RuleSetRule {
    return {
        issuer: /\.[j|t]sx/i,
        test: /\.svg$/i,
        use: [
            {
                loader: "@svgr/webpack",
                options: { icon: true },
            },
        ],
    };
}