const request = require('supertest')
const app = require('../../src/app')

describe('ONG', () => {
	it('Should be able to create a new ONG', async () => {
		const response = await request(app).post('/ongs').send({

		})
	})
})