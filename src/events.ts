import { Emitter } from "../lib/mycelia";

const emit = new Emitter();

type Callback = (args: any) => void;

export enum Events {
  TodoAdded = "todo:added",
  TodoInputChanged = "todo:input-changed",
}

export const onTodoAdded = (cb: Callback) => {
  emit.add(Events.TodoAdded, cb);
};

export const handleTodoAdded = (data: any) =>
  emit.dispatch(Events.TodoAdded, data);

export const onTodoInputChanged = (cb: Callback) => {
  emit.add(Events.TodoInputChanged, cb);
};

export const handleTodoInputChanged = (data: any) =>
  emit.dispatch(Events.TodoInputChanged, data);
