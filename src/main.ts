import { dom } from "../lib/mycelia";

const { div, ul, li, a } = dom;

const app = document.getElementById("app");

const linkClick = (e: MouseEvent) => {
  e.preventDefault();
  console.log("it work!");
};

const linkList = ul({ className: "link-list" }, [
  li(
    { className: "link-list__item" },
    a({ href: "https://google.com", onclick: linkClick }, "Google")
  ),
]);

const ListOfLinks = div({ className: "list" }, linkList);

app?.appendChild(ListOfLinks);
