const expect = require('chai').expect;
const open = require('./../../src/util/open');

describe("Testing open.js", () => {
  it("Testing Error", (done) => {
    open.url().catch((e) => {
      expect(e.message).to.equal('Expected a `target`');
      done();
    });
  });
});
