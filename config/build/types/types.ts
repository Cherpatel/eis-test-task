export type BuildPaths = {
    models: string;
    stores: string;
    assets: string;
    components: string;
    config: string;
    controllers: string;
    env: string;
    html: string;
    entry: string;
    output: string;
    favicon: string;
    libs: string;
};

export type BuildMode = "production" | "development";

export type BuildOptions = {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
    isProd: boolean;
    isDev: boolean;
};