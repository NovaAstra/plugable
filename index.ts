export type MaybePromise<T> = T | Promise<T>;

export type Plugin = {
    name: string;
}

export class Factory {
    private readonly plugins: readonly Plugin[]

    public constructor(plugins: Plugin[]) {
        this.plugins = [...plugins]
    }
}

export const plugable = (plugins: Plugin[]): Factory => {
    const factory = new Factory(plugins)

    return factory
}

const plugins: Plugin[] = [
    {
        name: "plugin",
    }
]

plugable(plugins)