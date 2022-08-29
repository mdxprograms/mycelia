import { dom, mount, Emitter } from "../lib/mycelia";

const emit = new Emitter();

const { div, ul, li, a, button } = dom;

type LinkListItemProps = {
  href: string;
  text: string;
};

const addLink =
  ({ href, text }: LinkListItemProps) =>
  (e: MouseEvent) => {
    e.preventDefault();
    emit.dispatch("link:added", { href, text });
  };

const linkListItem = ({ href, text }: LinkListItemProps) =>
  li({ className: "link-list__item" }, a({ href }, text));

const linkList = ul({ className: "link-list" }, [
  linkListItem({ href: "https://google.com", text: "Google" }),
  linkListItem({ href: "https://reddit.com", text: "Reddit" }),
]);
emit.add("link:added", ({ href, text }: LinkListItemProps) =>
  linkList.appendChild(linkListItem({ href, text }))
);

const addLinkButton = button(
  {
    onclick: addLink({ href: "https://soundcloud.com", text: "soundcloud" }),
  },
  "Add Soundcloud link"
);

const App = () => div({ className: "app-wrapper" }, [linkList, addLinkButton]);

mount(App(), "#app");
