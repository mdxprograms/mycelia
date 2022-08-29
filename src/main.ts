import { dom, mount } from "../lib/mycelia";

const { div, ul, li, a } = dom;

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

const Variations = div({ className: "parent" }, [
  div({ className: "child-div" }, "other div child"),
  div("just text for this dude"),
]);

const ListOfLinks = div({ className: "list" }, linkList);

const App = () => div({ className: "app-wrapper" }, [ListOfLinks, Variations]);

mount(App(), "#app");
