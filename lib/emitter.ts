type Listener = (args: any) => void;

export default class Emitter {
  events: Record<string, Listener[]>;

  constructor() {
    this.events = {};
  }

  hasEvent(eventName: string) {
    return Object.keys(this.events).includes(eventName);
  }

  isCallback(callback: Listener): boolean {
    return typeof callback === "function";
  }

  isValidEventName(eventName: string): boolean {
    return typeof eventName === "string";
  }

  removeListener(eventName: string, callbackListener: Listener): void {
    if (!this.hasEvent(eventName)) {
      throw Error(`${eventName} does not exist`);
    }

    this.events[eventName] = this.events[eventName].filter(
      (listener: Listener) =>
        listener.toString() !== callbackListener.toString()
    );
  }

  add(eventName: string, callback: Listener): void {
    if (!this.isCallback(callback)) {
      throw Error(`${typeof callback} must be a function`);
    }

    if (!this.isValidEventName(eventName)) {
      throw Error("eventName must be a string");
    }

    if (!this.hasEvent(eventName)) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
  }

  dispatch(eventName: string, payload: Record<string, unknown>): void {
    if (!this.hasEvent(eventName)) {
      throw Error(`${eventName} is not a registered event`);
    }

    this.events[eventName].forEach((listener: Listener) => listener(payload));
  }
}
