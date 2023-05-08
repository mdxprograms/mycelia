import { describe, it, expect } from "vitest";
import Emitter from "./emitter";

const emit = new Emitter<{ name: string }>();
const NameSent = "name:sent";

describe("emitter tests", () => {
  it("should receive { name: 'John' }", async () => {
    const onNameSent = emit.on(NameSent);
    const handleNameSent = emit.dispatch(NameSent);

    onNameSent(({ name }) => {
      expect(name).toBe("John");
    });

    handleNameSent({ name: "John" });
  });
});
