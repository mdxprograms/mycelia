import { Mount } from "./types/Utils";

export const mount: Mount = (child, parent) => {
  const maybeParent = document.querySelector(parent);

  if (!maybeParent) {
    throw Error(`parent selector ${parent} was not available within the DOM`);
  }

  if (!(child instanceof Element)) {
    throw Error("child must be an instance of Element or Node");
  }

  maybeParent.appendChild(child);
};
