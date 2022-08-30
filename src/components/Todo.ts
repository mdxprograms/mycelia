import { dom } from "../../lib/mycelia";

const { div } = dom;

export type TodoProps = {
  title: string;
};

const Todo = ({ title }: TodoProps) => div({ className: "todo" }, title);

export default Todo;
