export type ReturnType<T> = T extends Promise<infer R> ? Promise<R> : T;

export type ArgsType<T> = T extends unknown[] ? T : never;

export function createStream() {
    const broadcast = () => { }
    const dispatch = () => { }

    return {
        broadcast,
        dispatch
    }
}

export abstract class HookFactory<
    Args extends ArgsType<unknown[]> = [],
    Return = ReturnType<undefined>
> {
    protected call(...args: Args) { }
}

export class AsyncHook extends HookFactory {
}

export class SyncHook extends HookFactory {
}