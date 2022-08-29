import {
  ElementName,
  elementNames,
  Props,
  Children,
  CreateElement,
} from "./types/DOM";

const appendChildren = (children: Children, parentEl: Element): Element => {
  const p = parentEl;

  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        p.appendChild(child);
      });
    } else if (typeof children === "string") {
      p.textContent = children;
    } else {
      p.appendChild(children);
    }
  }

  return p;
};

const applyText = (parentEl: Element, props?: Props): Element => {
  const p = parentEl;

  if (props) {
    if (typeof props === "string") {
      p.textContent = props;
    }
  }

  return p;
};

const initElement = (el: ElementName, props?: Props): Element =>
  Object.assign(document.createElement(el), props ?? {});

const createElement: CreateElement =
  (el) =>
  (...args) => {
    const [props, children] = args;

    const parentEl = initElement(el, props);

    return appendChildren(children, applyText(parentEl, props));
  };

export const dom = Object.fromEntries(
  elementNames.map((elName) => [elName, createElement(elName)])
);
