const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { expect } = chai;

chai.use(chaiHttp);

describe('GET /api/hello', () => {
  it('should return a message from the server', (done) => {
    chai.request(server)
      .get('/api/hello')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Hello from server!');
        done();
      });
  });
});
