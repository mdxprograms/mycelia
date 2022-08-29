import { dom, mount } from "../lib/mycelia";
import { LinkListItemProps } from "./types";
import { onLinkAdded, handleLinkAdded } from "./events";

import linkList from "./links";
import alertMsg from "./alert";

const { div, button } = dom;

const addLink =
  ({ href, text }: LinkListItemProps) =>
  (e: MouseEvent) => {
    e.preventDefault();
    handleLinkAdded({ href, text });
  };

const addLinkButton = button(
  {
    onclick: addLink({ href: "https://soundcloud.com", text: "soundcloud" }),
  },
  "Add Soundcloud link"
);

const App = div({ className: "app-wrapper" }, [linkList, addLinkButton]);

onLinkAdded(({ text }: LinkListItemProps) => {
  App.prepend(alertMsg(text));
});

mount(App, "#app");
