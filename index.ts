export type MaybePromise<T> = T | Promise<T>;

export type Hook = {}

export type API = {}

export type Plugin = {}

export function fetchOrCreate() {

}

export abstract class Factory {
    public abstract name: Symbol

    public readonly plugins: Readonly<Plugin[]> = []

    public constructor(plugins: Plugin[]) {
        this.plugins = [...plugins]
    }

    public abstract tap

    public abstract call
}

export class Plugable {
    public constructor() { }
}