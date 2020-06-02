import { fSwitch, fCase, fDefault } from "./index";
import { SUCCESS, FAIL } from "./cases/responses";

describe("fSwitch", () => {
  const input = 20;
  const output = 20;
  let passingCase;
  let failingCase;
  let failingCallback;
  let passingCallback;
  let defaultCallback;

  beforeEach(() => {
    failingCase = jest.fn(input => input !== 20);
    passingCase = jest.fn(input => input === 20);
    failingCallback = jest.fn(() => output);
    passingCallback = jest.fn(() => output);
    defaultCallback = jest.fn(() => output);
  });

  it("should call all failing cases until passing case is called", () => {
    fSwitch(input, fCase(failingCase, failingCallback), fCase(failingCase, failingCallback), fCase(passingCase, passingCallback));
    expect(failingCase).toHaveBeenCalledTimes(2);
    expect(passingCase).toHaveBeenCalledTimes(1);
  });

  it("should call no cases once one has passed", () => {
    fSwitch(input, fCase(passingCase, passingCallback), fCase(failingCase, failingCallback));
    expect(passingCase).toHaveBeenCalledTimes(1);
    expect(failingCase).toHaveBeenCalledTimes(0);
  });

  it("should only call the callback of passing case", () => {
    fSwitch(input, fCase(failingCase, failingCallback), fCase(failingCase, failingCallback), fCase(passingCase, passingCallback), fCase(failingCase, failingCallback));
    expect(failingCallback).toHaveBeenCalledTimes(0);
    expect(passingCase).toHaveBeenCalledTimes(1);
  });

  it("should throw if default is not last argument", () => {
    const test = () => fSwitch(input, fDefault(defaultCallback), fCase(passingCase, passingCallback), fDefault(defaultCallback));

    expect(test).toThrow();
  });

  it("should pass input to all functions", () => {
    fSwitch(input, fCase(failingCase, failingCallback), fCase(passingCase, passingCallback), fDefault(defaultCallback));

    expect(passingCase).toBeCalledWith(input);
    expect(passingCallback).toBeCalledWith(input);
    expect(failingCase).toBeCalledWith(input);
  });

  it("should work using short form", () => {
    fSwitch(input, [failingCase, failingCallback], [passingCase, passingCallback], defaultCallback);

    expect(failingCase).toBeCalledTimes(1);
    expect(failingCallback).toBeCalledTimes(0);
    expect(defaultCallback).toBeCalledTimes(0);
    expect(passingCase).toBeCalledTimes(1);
    expect(passingCallback).toBeCalledTimes(1);
  });

  it("should return the result of the callback", () => {
    const result = fSwitch(input, fCase(passingCase, passingCallback));
    expect(result).toBe(output);
  });

  describe("when using a response case", () => {
    it("should pass a 200 when SUCCESS is used", () => {
      fSwitch(200, fCase(SUCCESS, passingCallback), fDefault(defaultCallback));

      expect(passingCallback).toBeCalledTimes(1);
      expect(defaultCallback).toBeCalledTimes(0);
    });

    it("should pass to default for a 200 when FAIL", () => {
      fSwitch(200, fCase(FAIL, passingCallback), fDefault(defaultCallback));

      expect(passingCallback).toBeCalledTimes(0);
      expect(defaultCallback).toBeCalledTimes(1);
    });
  });
});