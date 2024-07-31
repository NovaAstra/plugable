// @ts-nocheck

export type MaybePromise<T> = T | Promise<T>;

export type Plugin = {
    name: string;
    setup: () => MaybePromise<void>
}

export function fetchOrCreate<K, V>(cache: Map<K, V>, key: K, create: () => V): V {
    const existing = cache.get(key);
    if (existing !== undefined) return existing;

    const value = create();
    cache.set(key, value);

    return value;
}


export class Factory {
    private readonly plugins: readonly Plugin[]

    public constructor(plugins: Plugin[]) {
        this.plugins = [...plugins]
    }

    public call(name: string, ...args) {
        // const hook = new Proxy({}, {
        //     get: (target, prop: string) => {
        //         if (prop === name) {
        //             return (callback: () => void) => callback(...args);
        //         }

        //         return () => { }
        //     }
        // });

        const hook = {
            [name]: (callback) => callback(...args)
        };

        for (const plugin of this.plugins) {
            const setup = plugin.setup(hook)
        }
    }
}

export const plugable = (plugins: Plugin[]): Factory => {
    const factory = new Factory(plugins)

    return factory
}

const plugins: Plugin[] = [
    {
        name: "plugin",
        setup(api) {
            api.load(console.log)

        }
    },
    {
        name: "plugin",
        setup(api) {
            api.load(console.log)

            api.assert(console.log)
        }
    }
]

const event = plugable(plugins)

event.call("load")
event.call("assert")
event.call("assert12")