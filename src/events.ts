import { Emitter } from "../lib/mycelia";

const emit = new Emitter();

export enum Events {
  TodoAdded = "todo:added",
  TodoInputChanged = "todo:input-changed",
}

export const onTodoAdded = emit.on(Events.TodoAdded);

export const handleTodoAdded = emit.dispatch(Events.TodoAdded);

export const onTodoInputChanged = emit.on(Events.TodoInputChanged);

export const handleTodoInputChanged = emit.dispatch(Events.TodoInputChanged);
