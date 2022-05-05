const Joi = require('joi');

const schema = Joi.object({
  id: Joi.string()
      .alphanum(),
  name: Joi.string()
            .required(),
  address: Joi.string()
            .required(),
  latitude: Joi.number()
            .required(),
  longitude: Joi.number()
            .required(),
  URL_img: Joi.array(),
  phone: Joi.string(),
  email: Joi.string().email(),
  _24hs: Joi.bool()
})

module.exports = schema;