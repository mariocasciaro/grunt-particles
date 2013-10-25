
var self = module.exports = {
  __module: {
    provides: ["testService"]
  },

  testService: function(input) {
    self.input = input;
  }
};