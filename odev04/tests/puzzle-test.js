import { chooseRandomNumbers } from "../src/index";

test("invalid numbers", () => {
    expect(() => { chooseRandomNumbers(-1) }).toThrow();
    expect(() => { chooseRandomNumbers(0) }).toThrow();
    expect(() => { chooseRandomNumbers(9999) }).toThrow();
});