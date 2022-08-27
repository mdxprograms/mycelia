import { ElementName, Props } from "./types/DOM";

type DomElement = (props: Props) => Element;

const create = (el: ElementName, props) =>
  Object.assign(document.createElement(el), props);

export const div: DomElement = (props): HTMLDivElement => create("div", props);
