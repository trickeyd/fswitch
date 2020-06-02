export const fSwitch = (input, ...cases) => {
  for (let i = 0, l = cases.length; i < l; i++) {
    const fCase = cases[i];
    if (typeof fCase === "function") {
      if (i !== l - 1) throw new Error("fDefault must be the last argument");
      return fCase(input);
    } else if (Array.isArray(fCase)) {
      const [condition, callback] = fCase;
      if (condition(input)) {
        return callback(input);
      }
    } else {
      throw new Error(`Unknown case type ${typeof fCase} passed to fSwitch`);
    }
  }
};

export const fCase = (condition, callback) => [condition, callback];
export const fDefault = callback => callback;