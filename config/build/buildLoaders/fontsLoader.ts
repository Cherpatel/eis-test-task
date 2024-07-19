import type { RuleSetRule } from "webpack";

export function fontsLoader(): RuleSetRule {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
    };
}