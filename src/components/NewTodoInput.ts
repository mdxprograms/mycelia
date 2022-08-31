import { dom } from "../../lib/mycelia";

import {
  handleTodoInputErrored,
  onTodoInputChanged,
  onTodoInputErrored,
  handleTodoInputChanged,
  onTodoAdded,
} from "../events";

const { input, div } = dom;

// Main components
const NewTodoInput = input({
  className: "todo-input",
  onkeydown: (e: KeyboardEvent & { target: HTMLInputElement }) => {
    if (e.key === "Backspace") {
      if (e?.target?.value.length <= 3) {
        handleTodoInputErrored({
          hasError: true,
          msg: "must be more than 3 characters",
        });
      }
    }
  },
  onkeyup: (e: InputEvent & { target: HTMLInputElement }) => {
    handleTodoInputChanged({ title: e?.target?.value });
  },
}) as HTMLInputElement;

export const ErrorMsg = div({ className: "error" }, "");

// Event listeners
onTodoAdded(() => {
  NewTodoInput.value = "";
});

onTodoInputChanged(({ title }: { title: string }) => {
  if (title.length > 3) {
    ErrorMsg.textContent = "";
  }
});

onTodoInputErrored((error: { hasError: boolean; msg: string }) => {
  ErrorMsg.textContent = error.msg;
});

export default NewTodoInput;
