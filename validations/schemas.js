const Joi = require('joi');

const profile = {
	getProfileParams: Joi.object()
		.keys({
			platform: Joi.string().required(),
			gamertag: Joi.string().required(),
		})
		.options({ stripUnknown: true }),
};

module.exports = {
	profile,
};
