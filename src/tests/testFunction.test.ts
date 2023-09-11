import { expect, test } from "vitest";
import TestFunction from "../functions/TestFunction";

test("adds 1 + 2 to equal 3", () => {
  expect(TestFunction(1, 2)).toBe(3);
});
