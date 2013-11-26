'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.particles = {


  setUp: function(done) {
    // setup here if necessary
    done();
  },

  testServiceInvocation: function(test) {
    test.expect(4);

    var testModule = require('./root/testModule');
    test.ok(testModule.input);
    test.ok(testModule.input.grunt);
    test.ok(testModule.input2);
    test.ok(testModule.input2.grunt);

    test.done();
  }
};
