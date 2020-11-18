import { fSwitch, fCase, fDefault, SUCCESS, FAIL, and, or } from "./index"

describe("fSwitch", () => {
  const error = new Error("this is an error!!!!")

  const input = 20
  const output = 20
  let passingCase
  let failingCase
  let failingCallback
  let passingCallback
  let defaultCallback

  beforeEach(() => {
    failingCase = jest.fn(input => input !== 20)
    passingCase = jest.fn(input => input === 20)
    failingCallback = jest.fn(() => output)
    passingCallback = jest.fn(() => output)
    defaultCallback = jest.fn(() => output)
  })

  it("should call all failing cases until passing case is called", () => {
    fSwitch(
      input,
      fCase(failingCase, failingCallback),
      fCase(failingCase, failingCallback),
      fCase(passingCase, passingCallback)
    )
    expect(failingCase).toHaveBeenCalledTimes(2)
    expect(passingCase).toHaveBeenCalledTimes(1)
  })

  it("should call no cases once one has passed", () => {
    fSwitch(
      input,
      fCase(passingCase, passingCallback),
      fCase(failingCase, failingCallback)
    )
    expect(passingCase).toHaveBeenCalledTimes(1)
    expect(failingCase).toHaveBeenCalledTimes(0)
  })

  it("should only call the callback of passing case", () => {
    fSwitch(
      input,
      fCase(failingCase, failingCallback),
      fCase(failingCase, failingCallback),
      fCase(passingCase, passingCallback),
      fCase(failingCase, failingCallback)
    )
    expect(failingCallback).toHaveBeenCalledTimes(0)
    expect(passingCase).toHaveBeenCalledTimes(1)
  })

  it("should throw if default is not last argument", () => {
    const test = () => fSwitch(
        input,
        fDefault(defaultCallback),
        fCase(passingCase, passingCallback),
        fDefault(defaultCallback)
      )

    expect(test).toThrow()
  })

  it("should pass input to all functions", () => {
    fSwitch(
      input,
      fCase(failingCase, failingCallback),
      fCase(passingCase, passingCallback),
      fDefault(defaultCallback)
    )

    expect(passingCase).toBeCalledWith(input)
    expect(passingCallback).toBeCalledWith(input)
    expect(failingCase).toBeCalledWith(input)
  })

  it("should work using short form", () => {
    fSwitch(
      input,
      [failingCase, failingCallback],
      [passingCase, passingCallback],
      defaultCallback
    )

    expect(failingCase).toBeCalledTimes(1)
    expect(failingCallback).toBeCalledTimes(0)
    expect(defaultCallback).toBeCalledTimes(0)
    expect(passingCase).toBeCalledTimes(1)
    expect(passingCallback).toBeCalledTimes(1)
  })

  it("should return the result of the callback", () => {
    const result = fSwitch(input, fCase(passingCase, passingCallback))
    expect(result).toBe(output)
  })

  describe("when using a response case", () => {
    it("should pass a 200 when SUCCESS is used", () => {
      fSwitch(200, fCase(SUCCESS, passingCallback), fDefault(defaultCallback))

      expect(passingCallback).toBeCalledTimes(1)
      expect(defaultCallback).toBeCalledTimes(0)
    })

    it("should pass to default for a 200 when FAIL", () => {
      fSwitch(200, fCase(FAIL, passingCallback), fDefault(defaultCallback))

      expect(passingCallback).toBeCalledTimes(0)
      expect(defaultCallback).toBeCalledTimes(1)
    })
  })

  describe("fSwitch.try", () => {
    let onError

    beforeEach(() => {
      onError = jest.fn()
    })

    it("should call all failing cases until passing case is called", () => {
      fSwitch
        .try(
          input,
          fCase(failingCase, failingCallback),
          fCase(failingCase, failingCallback),
          fCase(passingCase, passingCallback)
        )
        .catch(onError)

      expect(failingCase).toHaveBeenCalledTimes(2)
      expect(passingCase).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledTimes(0)
    })

    it("should call no cases once one has passed", () => {
      fSwitch
        .try(
          input,
          fCase(passingCase, passingCallback),
          fCase(failingCase, failingCallback)
        )
        .catch(onError)

      expect(passingCase).toHaveBeenCalledTimes(1)
      expect(failingCase).toHaveBeenCalledTimes(0)
      expect(onError).toHaveBeenCalledTimes(0)
    })

    it("should only call the callback of passing case", () => {
      fSwitch
        .try(
          input,
          fCase(failingCase, failingCallback),
          fCase(failingCase, failingCallback),
          fCase(passingCase, passingCallback),
          fCase(failingCase, failingCallback)
        )
        .catch(onError)
      expect(failingCallback).toHaveBeenCalledTimes(0)
      expect(passingCase).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledTimes(0)
    })

    describe("when there is an error", () => {
      it("shoule call the error handler", () => {
        fSwitch
          .try(
            input,
            fCase(failingCase, failingCallback),
            fCase(passingCase, () => {
              throw error
            })
          )
          .catch(onError)

        expect(onError).toHaveBeenCalledWith(error)
      })
    })
  })

  describe("when using combiners", () => {
    describe("when using 'and'", () => {
      it("should pass if every condition passes", () => {
        fSwitch(
          input,
          fCase(and(passingCase, passingCase, passingCase), passingCallback),
          fCase(passingCase, () => {
            throw error
          })
        )
        expect(passingCase).toHaveBeenCalled()
      })

      it("should fail if any condidtion fails", () => {
        fSwitch(
          input,
          fCase(and(passingCase, failingCase, passingCase), passingCallback),
          fCase(passingCase, failingCallback)
        )
        expect(passingCallback).not.toHaveBeenCalled()
        expect(failingCallback).toHaveBeenCalled()
      })
    })

    describe("when using 'or'", () => {
      it("should pass if any condition passes", () => {
        fSwitch(
          input,
          fCase(or(failingCase, failingCase, passingCase), passingCallback),
          fCase(passingCase, () => {
            throw error
          })
        )
        expect(passingCase).toHaveBeenCalled()
      })

      it("should fail if all conditions fail", () => {
        fSwitch(
          input,
          fCase(or(failingCase, failingCase, failingCase), passingCallback),
          fCase(passingCase, failingCallback)
        )
        expect(passingCallback).not.toHaveBeenCalled()
        expect(failingCallback).toHaveBeenCalled()
      })
    })
  })
})
