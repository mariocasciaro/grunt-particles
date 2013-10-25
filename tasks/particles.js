
'use strict';

var path = require('path'),
  particles = require('particles');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('particles', 'Build your project based on dynamic configuration gathered using Scatter services',
  function() {
    var done = this.async();
    
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      scatterOptions: {},
      appRoot: "",
      configDir: null,
      runServices: null,
      configNamespace: null
    });

    if(!options.appRoot) {
      grunt.fail.fatal("Must set appRoot option");
    }

    var particlesOptions = {
      runServices: options.runServices,
      configNamespace: options.configNamespace,
      configDir: options.configDir,
      serviceArgs: [{grunt: grunt}]
    };

    particles.run(options.appRoot, particlesOptions).then(function() {
      done();
    }).otherwise(done);
  });
};
