const Joi = require('joi');
const joia = Object.assign({}, Joi);

const promisifier = (schema, obj) =>
  new Promise((resolve, reject) => {
    Joi.validate(obj, schema, (err, value) => {
      if (err) return reject(Object.assign({error: true, ...err.details[0]}));
      resolve(value);
    });
  });

const validate = schema => values =>
  Array.isArray(values)
    ? Promise.all(values.map(v => promisifier(schema, v).catch(e => e)))
    : promisifier(schema, values);

joia.createSchema = schema => {
  return {
    schema,
    validate: validate(schema)
  };
};

module.exports = joia;
