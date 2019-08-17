const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const { expect } = chai;
chai.use(chaiHttp);

describe('PROFILE ROUTES', () => {
	describe('Get user profile', () => {
		it('should get a status 200', done => {
			chai.request(server)
				.get('/api/v1/profile/origin/igornfaustino')
				.end((_err, res) => {
					expect(res).to.have.status(200);
					done();
				});
		});

		it('should get a status 404', done => {
			chai.request(server)
				.get('/api/v1/profile/origin/notarealprofileihope')
				.end((_err, res) => {
					expect(res).to.have.status(404);
					done();
				});
		});
	});
});
