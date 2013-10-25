/*
 * grunt-particles
 * https://github.com/mariocasciaro/grunt-particles
 *
 * Copyright (c) 2013 Mario Casciaro
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    particles: {
      test: {
        options: {
          runServices: ['svc|pipeline!testService'],
          appRoot: __dirname,
          configDir: __dirname + "/test/config"
        }
      }
    },

    // Unit tests.
    nodeunit: {
      test:  ['test/test.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.

  grunt.registerTask('test', ['particles', 'nodeunit']);
  
  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);
};
