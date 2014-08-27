/*
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    jekyllConfig: grunt.file.readYAML('_config.yml'),

    jekyll: {
      build: {
        options: {
        }
      },
      serve: {
        options: {
        }
      }
    },

    appengine: {
      options: {
        manageFlags: {
          email: "admin@polymer-project.org",
          no_cookies: true
        },
        runFlags: {
          port: 3000
        }
      },
      frontend: {
        root: '.'
      }
    }

  });

  // Plugin and grunt tasks.
  require('load-grunt-tasks')(grunt);

  // Default task. Run standard jekyll server.
  grunt.registerTask('default', ['jekyll:serve']);

  grunt.registerTask('serve', ['jekyll:build', 'appengine:run:frontend']);

  grunt.registerTask('deploy', ['appengine:update:frontend']);

  // Task to build docs.
  //grunt.registerTask('docs', ['apidocs', 'vulcanize:build', 'jekyll:build']);
  //grunt.registerTask('docs', ['vulcanize:build', 'jekyll:build']);

  // Task to build and copy docs over to publishing repo.
  //grunt.registerTask('publish', ['jekyll:prod', 'copy:main']);
};