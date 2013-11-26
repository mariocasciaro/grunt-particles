
var self = module.exports = {
  __module: {
    provides: ["testService", "testService2"]
  },

  testService: function(input) {
    self.input = input;
  },

  testService2: function(input) {
    self.input2 = input;
  }
};