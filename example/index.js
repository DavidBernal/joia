const Person = require('./schema');

const a = {name: 'pepe', age: 30};
const b = {name: null, age: 60};

Person.validate([a, b])
  .then(r => console.log(r)) // => { name: 'pepe', age: 30 }
  .catch(err => console.log(err));

Person.validate(a)
  .then(r => console.log(r))
  .catch(err => console.log(err)); // err =>
/* { 
  error: true,
  message: '"name" must be a string',
  path: [ 'name' ],
  type: 'string.base',
  context: { value: null, key: 'name', label: 'name' } 
} */

Person.validate(b).then(r => console.log(r)); //  =>
/* 
[
  {name: 'pepe', age: 30},
  {
    error: true,
    message: '"name" must be a string',
    path: ['name'],
    type: 'string.base',
    context: {value: null, key: 'name', label: 'name'}
  }
] */
