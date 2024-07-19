import ReactRefreshTypescript from "react-refresh-typescript";

import type { BuildOptions } from "@config/build/types/types";

export function tsLoader(options: BuildOptions) {
    const { isDev } = options;

    return {
        exclude: "/node_modules/",
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader",
            options: {
                getCustomTransformers: () => ({
                    before: [ isDev && ReactRefreshTypescript() ].filter(Boolean),
                }),
                transpileOnly: isDev,
            },
        },
    };
}