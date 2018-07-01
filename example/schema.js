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
