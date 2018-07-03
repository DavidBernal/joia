const Joi = require('joi');
const joia = Object.assign({}, Joi);

const promisifier = (schema, obj, options) =>
  new Promise((resolve, reject) => {
    options = options || {};
    Joi.validate(obj, schema, options, (err, value) => {
      if (err) {
        err = !options.abortEarly ? err.details : err.details[0];
        return reject(Object.assign({error: true, ...err}));
      }
      resolve(value);
    });
  });

const validate = (schema, options) => values =>
  Array.isArray(values)
      ? Promise.all(values.map(v => promisifier(schema, v, options).catch(e => e)))
      : promisifier(schema, values, options);


joia.createSchema = (schema, options) => {
  return {
    schema,
    validate: validate(schema, options)
  };
};

module.exports = joia;
