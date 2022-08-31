import { describe, it, expect, beforeEach } from "vitest";

import { dom } from "./dom";

const { div, ul, li } = dom;

beforeEach(() => {
  const testDiv = div({ id: "test" }, "works");

  document.body.appendChild(testDiv);
});

describe("dom tests", () => {
  it("should add div to document body", async () => {
    expect(document?.body?.querySelector("#test")?.textContent).toBe("works");
  });

  it("should have nested ul", async () => {
    const Container = div({ id: "container" });
    const Users = ul({ id: "user-list" }, [
      li({ className: "user-list-item" }, "John"),
      li({ className: "user-list-item" }, "Dave"),
      li({ className: "user-list-item" }, "Bob"),
    ]);

    Container.appendChild(Users);

    expect(Container.querySelector("#user-list")?.firstChild?.textContent).toBe(
      "John"
    );
  });
});
