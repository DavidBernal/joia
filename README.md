# Joia

Joi wrapper to promisify your validations for NodeJS

![Image of Joia](./diamond.png)

Icon made by [Smashicon](https://smashicons.com/) from www.flaticon.com

## How to use

Install package

```
$ npm install joia
// or
$ yarn add joia
```

Create your schema:

Person.js

```js
const joia = require('../src/index');

const person = joia.createSchema({
  name: joia.string().required(),
  age: joia
    .number()
    .integer()
    .min(1)
    .max(45)
});

module.exports = person;
```

Now, in your program, validate your objects:

index.js

```js
const Person = require('./schema');

const a = {name: 'pepe', age: 30};
const b = {name: null, age: 60};

Person.validate(a)
  .then(p => console.log(p)) // p = a
  .catch(err => console.log(err));

Person.validate(b)
  .then(v => console.log(v)))
  .catch(err => console.log(err));
  /* err = {
    error: true,
    message: '"name" must be a string',
    path: [ 'name' ],
    type: 'string.base',
    context: { value: null, key: 'name', label: 'name' }
  } */


// validate multiple objects
const Person = require('./schema');

Person.validate([a, b])
  .then(r => console.log(r)); // result is an array of values and errors
```

Look example folder for more details
