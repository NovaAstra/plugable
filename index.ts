// @ts-nocheck

export type ReturnType<T = undefined> = T extends Promise<infer R> ? Promise<R> : T;

export type ArgsType<T = unknown[]> = T extends unknown[] ? T : never;

export type Callback<I = unknown, O = unknown> = (input: I) => O

export type Callbacks<I = unknown, O = unknown> = Callback<I, O>[];

export type CounterCallback<I = unknown, O = unknown> = (index: number, input: I) => O

export type Counter<I = unknown, O = unknown> = {
    initiate: (input: I) => O
    dispatch: (index: number, input: I) => O
}

export class CounterFactory<I, O> implements Counter<I, O> {
    private callback: CounterCallback<I, O>

    public constructor(callback: CounterCallback<I, O>) {
        this.callback = callback
    }

    public initiate(input: I) {
        return this.dispatch(0, input)
    }

    public dispatch(index: number, input: I) {
        return this.callback(index, input)
    }
}

export class HookFactory {
    public callbacks = [];

    public tap(callback) {
        this.callbacks.push(callback)
    }

    public call(...args) {
        const counter = new CounterFactory((index, input) => {
            return this.callbacks[index].apply(this, input);
        })

        counter.initiate(args)
    }
}

const event = new HookFactory()

event.tap((...args) => {
    console.log(args)
})
event.tap((...args) => {
    console.log(args)
})

event.call("a", "b")