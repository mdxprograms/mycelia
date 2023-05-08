import { Listener, Listeners } from "./types/Emitter";

export default class Emitter<T> {
  private listeners: Listeners<T>

  constructor() {
    this.listeners = {};
  }

  hasEvent(eventName: string) {
    return Object.keys(this.listeners).includes(eventName);
  }

  isCallback(callback: Listener<T>): boolean {
    return typeof callback === "function";
  }

  isValidEventName(eventName: string): boolean {
    return typeof eventName === "string";
  }

  removeListener(eventName: string, callbackListener: Listener<T>): void {
    if (!this.hasEvent(eventName)) {
      throw Error(`${eventName} does not exist`);
    }

    this.listeners[eventName] = this.listeners[eventName].filter(
      (listener: Listener<T>) =>
        listener.toString() !== callbackListener.toString()
    );
  }

  on(eventName: string) {
    return (callback: Listener<T>) => {
      if (!this.isCallback(callback)) {
        throw Error(`${typeof callback} must be a function`);
      }

      if (!this.isValidEventName(eventName)) {
        throw Error("eventName must be a string");
      }

      if (!this.hasEvent(eventName)) {
        this.listeners[eventName] = [];
      }

      this.listeners[eventName].push(callback);
    };
  }

  dispatch(eventName: string) {
    return (payload: T) => {
      if (!this.hasEvent(eventName)) {
        throw Error(`${eventName} is not a registered event`);
      }

      this.listeners[eventName].forEach((listener: Listener<T>) => {
        listener(payload);
      });
    };
  }
}

export type EmitterType = typeof Emitter