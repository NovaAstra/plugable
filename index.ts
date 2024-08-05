export type MaybePromise<T> = T | Promise<T>;

export type Plugin = {}

export class Factory {
    private readonly plugins: Readonly<Plugin[]> = []

    public constructor(plugins: Plugin[]) {
        this.plugins = [...plugins]
    }
}