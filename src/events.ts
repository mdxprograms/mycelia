import { Emitter } from "../lib/mycelia";

const emit = new Emitter();

type Callback = (args: any) => void;

export enum Events {
  LinkAdded = "link:added",
}

export const onLinkAdded = (cb: Callback) => {
  emit.add(Events.LinkAdded, cb);
};

export const handleLinkAdded = (data: any) =>
  emit.dispatch(Events.LinkAdded, data);
