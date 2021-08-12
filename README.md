[![NPM Version][npm-image]][npm-url]

# fSwitch

<h3>A functional switch statement - by <a href="https://www.npmjs.com/~idiosync"><img width="100px" height="31px" valign="middle" src="https://storage.googleapis.com/idiosync-web-images/telescope/idiosync_very_small_white_bg.png"></a></h3>

Initially created for handling server statuses in a nice readable way, it generalises as a system for
implementing complex conditional code in a easy-to-read and self-documenting manner.

```js
// use with redux-saga
yield fSwitch(res.status,
  [SUCCESS, () => put(successAction)],
  [FAIL, () => put(failAction)],
  () => put({ type: 'error', error: new Error('summin went wrong') })
)
```

## Installation

yarn:

```bash
$ yarn add @idiosync/fswitch
```

npm:

```bash
$ npm i @idiosync/fswitch
```

## Basic use

The fSwich function accepts an input followed by a series of conditional functions and callbacks. Like a switch statement the first
passing case terminates the process. Finally, a default callback can be passed.

```js
import { fSwitch, fCase, fDefault } from "@idiosync/fswitch"

const person = { age: 45, name: James };

const NAME_IS_RICHARD = person => person.name === 'rechard'
const IS_YOUNGER_THAN_18 = person => person.age < 18

fSwitch(person,
  fCase(NAME_IS_RICHARD, person => saveToRichardPool(person)),
  fCase(IS_YOUNGER_THAN_18, person => tooYoung(person),
  fDefault(person => person.isHappy = true)
)
```

The above statement can also be written in a short from

```js
fSwitch(
  person,
  [NAME_IS_RICHARD, (person) => saveToRichardPool(person)],
  [IS_YOUNGER_THAN_18, (person) => tooYoung(person)],
  (person) => (person.isHappy = true)
);
```

The fSwitch function returns whatever is returned by the successful callback.
Amongst other things this can useful for asynchronous effects.

```js
// await promise returned by successful callback
await fSwitch(
  input,
  fCase(SOME_STATE, async (input) => fetch(input)),
  fDefault(async (input) => fetch(input))
);
```

## Server status codes

fSwitch was initially created for dealing with server status codes in
redux-saga, so I will use that as an example.

All common server codes are supported and listed here: [responses].

```js
// import some error cases
import { SUCCESS, FAIL } from "@idiosync/fswitch";

// create our own conditional if we needed
// (although 404 and all other common codes are actually in above file too)
const IS_404 = (status) => status === 404;

function* fetchUserInfoSaga() {
  const res = yield fetch(url);

  yield fSwitch(
    res.status,
    [SUCCESS, () => put(successAction)],
    [IS_404, () => put(server404Action)],
    [FAIL, () => put(failAction)],
    () => put({ type: "error", error: new Error("summin went wrong") })
  );
}
```

If you need a more complex callback you can return a generator or another saga.
This allows you to effectively yield from the callback

```js
import { fSwitch, SUCCESS } from "fswitch";
import { put, call } from "redux-saga/effects";

function* fetchUserInfoSaga() {
  const res = yield fetch(url);

  yield fSwitch(
    res.status,
    [
      SUCCESS,
      // callback returns a generator wrapped with saga's "call" function
      (status) =>
        call(function* () {
          if (status === 202) {
            yield put(someAction);
          } else {
            yield put(someOtherAction);
          }
        }),
    ],
    () => put(failAction)
  );
}
```

Remember that once a case passes the later ones are not called, so if you want to use SUCCESS or FAIL conditions
then you will have to handle individaul calls first.

```js
fSwitch(
  res.status,
  [SUCCESS, handleSuccess],
  [s200, handle200] // <--- this line will never be reached
);
```

## Combiners

These are functions that combine multiple conditions with and / or logic.

```js
fSwitch(
  status,
  [or(s200, s202), handleSuccess],
  [and(isMoreThan202, isLessThan300), handleSuccessDifferently],
  [FAIL, handleFail]
);
```

## Try/Catch

For the sake of pretty syntax I have added an optional try/catch wrapper. If you use this you
MUST use the catch function returned by try or fSwitch will never be called

```js
  yield fSwitch.try(res.status,
    [ SUCCESS, () => throw new Error("error")],
    () => defaultAction()
  ).catch(
    error => handleError(error)   // <-- error is caught here
  )
```

[npm-image]: https://img.shields.io/npm/v/@idiosync/fswitch
[npm-url]: https://www.npmjs.com/package/@idiosync/fswitch
[responses]: https://github.com/trickeyd/fswitch/blob/master/src/cases/responses.js
