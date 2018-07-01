const Person = require('./schema');

const a = {name: 'pepe', age: 30};
const b = {name: null, age: 60};

Person.validate([a, b])
  .then(r => console.log(r))
  .catch(err => console.log(err));

Person.validate(a)
  .then(r => console.log(r))
  .catch(err => console.log(err));

Person.validate(b)
  .then(r => console.log(r))
  .catch(err => console.log(err));
