import { dom } from "../../lib/mycelia";

import { handleTodoInputChanged, onTodoAdded } from "../events";

const { input } = dom;

const NewTodoInput = input({
  className: "todo-input",
  onkeyup: (e: InputEvent) =>
    handleTodoInputChanged({ title: (e?.target as HTMLInputElement)?.value }),
}) as HTMLInputElement;

onTodoAdded(() => {
  NewTodoInput.value = "";
});

export default NewTodoInput;
