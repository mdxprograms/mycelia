import { dom, mount } from "../lib/mycelia";
import NewTodoInput from "./components/NewTodoInput";
import NewTodoSubmitBtn from "./components/NewTodoSubmitButton";
import Todos from "./components/Todos";

import { onTodoInputChanged } from "./events";

const { div } = dom;

onTodoInputChanged((val) => {
  console.log(val);
});

const App = div({ className: "app-wrapper" }, [
  div({ className: "todo-form" }, [NewTodoInput, NewTodoSubmitBtn]),
  Todos,
]);

mount(App, "#app");
