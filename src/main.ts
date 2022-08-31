import { dom, mount } from "../lib/mycelia";
import NewTodoInput, { ErrorMsg } from "./components/NewTodoInput";
import NewTodoSubmitBtn from "./components/NewTodoSubmitButton";
import Todos from "./components/Todos";

const { div } = dom;

const App = div({ className: "app-wrapper" }, [
  div({ className: "todo-form" }, [NewTodoInput, ErrorMsg, NewTodoSubmitBtn]),
  Todos,
]);

mount(App, "#app");
