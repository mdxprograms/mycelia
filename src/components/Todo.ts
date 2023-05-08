import { dom } from "../../lib/mycelia";
import { State } from "../events";

const { div } = dom;

const Todo = ({ title }: State) => div({ className: "todo" }, title);

export default Todo;
