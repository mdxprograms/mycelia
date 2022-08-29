import { ElementName, elementNames, Props, Children } from "./types/DOM";

type CreateElement = (
  el: ElementName
) => (props?: Props, children?: Children) => Element;

const createElement: CreateElement =
  (el) =>
  (...args) => {
    const [props, children] = args;

    const parentEl = Object.assign(document.createElement(el), props ?? {});

    if (props) {
      if (typeof props === "string") {
        parentEl.textContent = props;
      }
    }

    if (children) {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          parentEl.appendChild(child);
        });
      } else if (typeof children === "string") {
        parentEl.textContent = children;
      } else {
        parentEl.appendChild(children);
      }
    }

    return parentEl;
  };

export const dom = Object.fromEntries(
  elementNames.map((elName) => [elName, createElement(elName)])
);
