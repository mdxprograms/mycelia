import { dom } from "../lib/mycelia";
import { LinkListItemProps } from "./types";

import { onLinkAdded } from "./events";

const { ul, li, a } = dom;

const linkListItem = ({ href, text }: LinkListItemProps) =>
  li({ className: "link-list__item" }, a({ href }, text));

const linkList = ul({ className: "link-list" }, [
  linkListItem({ href: "https://google.com", text: "Google" }),
  linkListItem({ href: "https://reddit.com", text: "Reddit" }),
]);

onLinkAdded(({ href, text }: LinkListItemProps) => {
  linkList.appendChild(linkListItem({ href, text }));
});

export default linkList;
