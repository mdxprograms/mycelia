import { dom } from "../../lib/mycelia";
import { handleTodoAdded } from "../events";
import NewTodoInput from "./NewTodoInput";

const { button } = dom;

const NewTodoSubmitBtn = button(
  {
    className: "new-todo-submit",
    onclick: () => handleTodoAdded({ title: NewTodoInput.value }),
  },
  "Add Todo"
);

export default NewTodoSubmitBtn;
