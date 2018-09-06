let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let expect = chai.expect
let bio = require('../data/bio')
let projects = require('../data/projects')

chai.use(chaiHttp)

let request

describe('GET /api/bio', () => {

	beforeEach(() => {
		request = chai.request(server)
	})

	it('Should Return an Array of Paragraphs', done => {
		request.get('/api/bio').end((err, res) => {
			let { status, body } = res

			expect(err).to.be.null

			expect(status).to.equal(200)

			expect(body).to.be.an('array').that.has.lengthOf(bio.length)

			for(let i = 0; i < body.length; i++) {
				expect(body[i])
					.to.be.a('string')
					.that.equals(bio[i])
			}

			done()
		})
	})
})

describe('GET /api/projects', () => {
	
	beforeEach(() => {
		request = chai.request(server)
	})

	it('Should return an array of project items', (done) => {
		request.get('/api/projects').end((err, res) => {
			let { status, body } = res

			expect(err).to.be.null

			expect(status).to.equal(200)

			expect(body)
				.to.be.an('array')
				.that.has.lengthOf(projects.length)

			for(let i = 0; i < body.length; i++) {
				expect(body[i])
					.to.be.an('object')
					.that.includes(projects[i])
			}

			done()
		})
	})
})