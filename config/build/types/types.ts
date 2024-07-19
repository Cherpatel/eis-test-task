export type BuildPaths = {
    html: string;
    entry: string;
    output: string;
    components: string;
    assets: string;
    config: string;
    favicon: string;
};

export type BuildMode = "production" | "development";

export type BuildOptions = {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
    isProd: boolean;
    isDev: boolean;
};