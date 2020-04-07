const { celebrate, Segments, Joi } = require('celebrate')


const createIncidents = celebrate({
	[Segments.BODY]: Joi.object().keys({
		title: Joi.string().required().max(120),
		description: Joi.string().required(),
		value: Joi.number().required()
	}),
	[Segments.HEADERS]: Joi.object().keys({
		auth: Joi.string().required()
	})
})

const getIncidents = celebrate({
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number()
	})
})

const deleteIncidents = celebrate({
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required()
	}),
	[Segments.HEADERS]: Joi.object().keys({
		auth: Joi.string().required()
	})
})

module.exports = { getIncidents, deleteIncidents, createIncidents}