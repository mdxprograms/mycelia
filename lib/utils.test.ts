import { describe, it, expect } from "vitest";
import { mount } from "./utils";
import { dom } from "./dom";

const { div } = dom;

describe("utils tests", () => {
  it("should mount div with hello text", async () => {
    const Hello = div("hello");

    document.body.appendChild(Hello);

    mount(Hello, "body");

    expect(document.body?.firstChild?.textContent).toBe("hello");
  });
});
