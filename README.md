[![NPM Version][npm-image]][npm-url]
# fSwitch
<h3>A functional switch statement - by  <img  valign="middle" src="https://storage.googleapis.com/idiosync-web-images/telescope/idiosync_very_very_small.png" /></h3>

Initially created for handling server statuses in a nice readable way, it generalises as a system for
implementing complex conditional code in a easy-to-read and self-documenting manner. 

## Installation

yarn:
```bash
$ yarn add @idiosync/fswitch
```

npm:
```bash
$ npm i @idiosync/fswitch
```

 

### Basic use
The fSwich function accepts an input followed by a series of conditional functions and callbacks. Like a switch statement the first 
passing case terminates the process. Finally, a default callback can be passed.

```js
import { fSwitch, fCase, fDefault } from "fswitch"

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
fSwitch(person,
  [NAME_IS_RICHARD, person => saveToRichardPool(person)],
  [IS_YOUNGER_THAN_18, person => tooYoung(person)],
  person => person.isHappy = true
)
``` 

The fSwitch function returns whatever is returned by the successful callback.
Amongst other things this can useful for asyncronus effects.
```js
// await promise returned by successful callback
await fSwitch(input,
  fCase(SOME_STATE, async (input) => fetch(input)),
  fDefault(async (input) => fetch(input))
)
```

### Server status codes
fSwitch was initially created for dealing with server status codes in
react-saga, so I will use that as an example.

```js
// import some error cases
import { SUCCESS, FAIL } from 'fswitch/cases/responses'

// create our own conditional if we needed
// (although 404 and all other common codes are actually in above file too)
const IS_404 = status => status === 404

function* fetchUserInfoSaga() {
  const res = yield fetch(url)
  
  yield fSwitch(res.status,
    [SUCCESS, () => put(successAction)],
    [IS_404, () => put(server404Action)],
    [FAIL, () => put(failAction)],
    () => put({ type: 'error', error: new Error('summin went wrong') })
  )
}
```

If you need a more complex callback you can return a generator or another saga
This allows you to yield from the callback

```js
function* fetchUserInfoSaga() {
  const res = yield fetch(url)
  
  yield fSwitch(res.status,
    [
      SUCCESS, (status) => function* () {
        if(status === 202){
          yield put(someAction)
        } else {
          yield put(someOtherAction)
        }
      }
    ],
    () => put(failAction)
  )
}
```


[npm-image]: https://img.shields.io/npm/v/@idiosync/fswitch
[npm-url]: https://www.npmjs.com/package/@idiosync/fswitch
