export const fSwitch = (input, ...cases) => {
  for (let i = 0, l = cases.length; i < l; i++) {
    const fCase = cases[i]
    if (typeof fCase === "function") {
      if (i !== l - 1) throw new Error("fDefault must be the last argument")
      return fCase(input)
    } else if (Array.isArray(fCase)) {
      const [condition, callback] = fCase
      if (condition(input)) {
        return callback(input)
      }
    } else {
      throw new Error(`Unknown case type ${typeof fCase} passed to fSwitch`)
    }
  }
}

fSwitch.try = (input, ...cases) => {
  return {
    catch: (onError) => {
      try {
        return fSwitch(input, ...cases)
      } catch (error) {
        onError(error)
      }
    },
  }
}

export const fCase = (condition, callback) => [condition, callback]
export const fDefault = callback => callback

export * from "./cases/responses"
export * from "./utils/combiners"
