const { celebrate, Segments, Joi } = require('celebrate')

const auth = celebrate({
	[Segments.HEADERS]: Joi.object({
		auth: Joi.string().required()
	}).unknown()
})

module.exports = auth