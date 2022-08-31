import { dom } from "../../lib/mycelia";
import { onTodoAdded } from "../events";
import Todo from "./Todo";

const { div } = dom;

const Todos = div({ className: "todos" }, []);

onTodoAdded(({ title }) => {
  Todos.appendChild(Todo({ title }));
});

export default Todos;
