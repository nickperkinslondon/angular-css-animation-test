module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      dev: {
        options: {
          compress: false
        },
        files: [
          {
            expand: true,
            src: ['**/*.stylus'],
            ext: '.css'
          }
        ]
      }
    },
    jade: {
      dev: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            src: ['**/*.jade'],
            ext: '.html'
          }
        ]
      }
    },
    coffee: {
      dev: {
        options: {
          bare: true
        },
        files: [
          {
            expand: true,
            src: ['**/*.coffee'],
            ext: '.js'
          }
        ]
      }
    },
    watch: {
      stylus: {
        files: ['**/*.stylus'],
        tasks: ['stylus'],
        options: {
          livereload: true
        }
      },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jade'],
        options: {
          livereload: true
        }
      },
      coffee: {
        files: ['**/*.coffee'],
        tasks: ['coffee'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['**/*.html'],
        options: {
          livereload: true
        }
      },
      js: {
        files: ['**/*.js'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['**/*.css'],
        tasks: [],
        options: {
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  return grunt.registerTask('default', ['jade', 'coffee', 'stylus', 'watch']);
};
