export type MaybeAsync<T> = T | Promise<T>;

export type Args<T extends unknown[] = unknown[]> = T;

export type Return<T = void> = MaybeAsync<T>

export type Hook<I extends unknown[] = [], O = undefined> = (...args: Args<I>) => Return<O>;

export type Hooks<I extends unknown[] = [], O = undefined> = Hook<I, O>[]