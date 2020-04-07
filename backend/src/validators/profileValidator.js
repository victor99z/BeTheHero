const { celebrate, Segments, Joi } = require('celebrate')

const profile = celebrate({
	[Segments.BODY]: Joi.object().keys({
		id: Joi.string().required()
	})
})

module.exports = profile