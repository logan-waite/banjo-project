import * as mocha from 'mocha'
import * as chai from 'chai'
import chaiHttp = require('chai-http')

import app from '../src/App'

chai.use(chaiHttp)
const expect = chai.expect

describe('login with valid creds', () => {
  it('responds with object', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('object')
      })
  })

  it('success prop should be true', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.equal(true)
      })
  })

  it('data prop should contain a user', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.an('object')
        expect(res.body.data).to.have.all.keys([
          'id',
          'name',
          'email'
        ])
      })
  })
})

describe('login with invalid creds', () => {
  it('should give bad auth code, but still be well-formed', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.status).to.equal(401)
        expect(res).to.be.json
        expect(res.body).to.be.an('object')
      })
  })

  it('success prop should be false', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.equal(false)
      })
  })

  it('data prop should be empty', () => {
    return chai.request(app).post('/api/auth/login')
      .then(res => {
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.an('object').that.is.empty
      })
  })
})

describe('create user', () => {
  it('responds with object', () => {
    return chai.request(app).put('/api/auth/create')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res).to.be.json
        expect(res.body).to.be.an('object')
      })
  })

  it('success prop should be true', () => {
    return chai.request(app).put('/api/auth/create')
      .then(res => {
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.equal(true)
      })
  })

  it('data prop should contain created user', () => {
    return chai.request(app).put('/api/auth/create')
      .then(res => {
        expect(res.body).to.have.property('data')
        expect(res.body.data).to.be.an('object')
        expect(res.body.data).to.have.all.keys([
          'id',
          'name',
          'email'
        ])
      })
  })
})
