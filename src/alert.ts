import { dom } from "../lib/mycelia";

const { div } = dom;

const alertMsg = (value: string) => div({ className: "alert" }, value);

export default alertMsg;
