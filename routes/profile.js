const router = require('express').Router();
const fetch = require('node-fetch');
const errors = require('common-errors');
const JoiMW = require('../validations/middleware');
const { profile } = require('../validations/schemas');

router.get(
	'/v1/profile/:platform/:gamertag',
	JoiMW(profile.getProfileParams, 'params'),
	async (req, res, next) => {
		try {
			const headers = {
				'TRN-Api-Key': process.env.TRACKER_API_KEY,
			};

			const { platform, gamertag } = req.params;

			const response = await fetch(
				`${process.env.TRACKER_API_URL}/profile/${platform}/${gamertag}`,
				{
					headers,
				},
			);

			const data = await response.json();

			if (data.errors && data.errors.length > 0) {
				return next(new errors.NotFoundError('Profile not found'));
			}
			return res.json(data);
		} catch (error) {
			console.error(error);
			return next(error);
		}
	},
);

module.exports = router;
