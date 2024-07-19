import crypto from "crypto";
import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { BuildOptions } from "@config/build/types/types";
import type { RuleSetRule } from "webpack";

export function scssLoader(options: BuildOptions): RuleSetRule {
    const { isProd } = options;

    const cssModuleLoader = {
        loader: "css-loader",
        options: {
            importLoaders: 1,
            modules: {
                exportLocalsConvention: "camel-case-only",
                getLocalIdent: (context, localIdentName, localName) => {
                    const resourcePath = context.resourcePath;
                    const fileName = path.basename(resourcePath, path.extname(resourcePath)).replace(".module", "");
                    const hash = crypto.createHash("md5").update(context.resourcePath).digest("hex").slice(0, 5);

                    if (localName === "root") {
                        return `${ fileName }_${ hash }`;
                    }

                    return `${ fileName }_${ localName }_${ hash }`;
                },
                namedExport: false,
            },
            sourceMap: true,
        },
    };

    return {
        oneOf: [
            {
                test: /\.module\.(css|scss)$/,
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    cssModuleLoader,
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                use: [
                    isProd ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
        test: /\.(sa|sc|c)ss$/,
    };
}