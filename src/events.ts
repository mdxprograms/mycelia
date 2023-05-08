import { Emitter } from "../lib/mycelia";

export type State = { title?: string; hasError?: boolean; msg?: string; }

const emit = new Emitter<State>();

export enum Events {
  TodoAdded = "todo:added",
  TodoInputChanged = "todo:input-changed",
  TodoInputErrored = "todo:input-errored",
}

export const onTodoAdded = emit.on(Events.TodoAdded);

export const onTodoInputChanged = emit.on(Events.TodoInputChanged);

export const handleTodoAdded = emit.dispatch(Events.TodoAdded);

export const handleTodoInputChanged = emit.dispatch(Events.TodoInputChanged);

export const onTodoInputErrored = emit.on(Events.TodoInputErrored);

export const handleTodoInputErrored = emit.dispatch(Events.TodoInputErrored);
