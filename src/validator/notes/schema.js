/* eslint-disable linebreak-style */
const Joi = require('joi');

const NotePayloadSchema = Joi.Object({
  title: Joi.String().required(),
  body: Joi.String().required(),
  tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };
