export type Listener<T> = (value: T) => any;

export type Listeners<T> = Record<string, Listener<T>[]>