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
          oauth2: true
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