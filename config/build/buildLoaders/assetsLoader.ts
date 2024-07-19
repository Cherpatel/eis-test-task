import type { RuleSetRule } from "webpack";

export function assetsLoader(): RuleSetRule {
    return {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
    };
}