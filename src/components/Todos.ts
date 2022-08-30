import { dom } from "../../lib/mycelia";
import { onTodoAdded } from "../events";
import Todo from "./Todo";

const { div } = dom;

const Todos = div({ className: "todos" }, []);

onTodoAdded((val) => {
  Todos.appendChild(Todo({ title: val }));
});

export default Todos;
