define(function(require) {
  var module = require('./dist/sifter');
  describe('sifter.js', function() {
    it('should have search function', function() {
      expect(new module().search).to.be.a('function');
    });
  });
});

