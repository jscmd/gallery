define(function(require) {
  var Sifter = require('./dist/sifter');
  describe('sifter.js', function() {
    it('should have search function', function() {
      var data = [{text:1, name:2}];
      expect(new Sifter(data).search).to.be.a('function');
    });
  });
});

