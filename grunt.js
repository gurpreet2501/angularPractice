var assets  = require('./build_scripts/assets.js'),
    wiredep = require('wiredep');

module.exports = function(grunt) {
  
  grunt.initConfig({
    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'index.html',
        ],

        options: {
          // See wiredep's configuration documentation for the options
          // you may pass:

          // https://github.com/taptapship/wiredep#configuration
        }
      }
    },
    watch: {
      scripts: {
        files: ['index.html',
                'scripts/**/*.js',
        tasks: ['default'],
        options: {
          livereload: true
        },
      },
    },
    
    includeSource: {
      options: {},
      index: {
        files: {
          'index.html':'index.html'
        }
      },
      prod: {
        files: {
          'prod/index.html':'prod/index.html'
        }
      }
    },
    
    jshint: {
      all: ['Gruntfile.js', 'scripts/**/*.js']
    },
        options: {
          //mangle: false,
          //sourceMap: true,
          beautify: false,
        },
      }
    },
    copy: {
      prod: {
        files: [
          {expand: true, src: [/*'views/**',*/'styles/third-party/**','post.php','img/**'], dest: 'prod/'}
        ],
      }
    },
        dest:     'scripts/template-cache.js',
        options:    {
          htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true }
        }
      }
    },
    spell: { 
      files: ['views/**'],
      options: {
        lang: 'en',
        ignore: ['']
      }
    }

  });

  
  
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-spell');

  
  grunt.registerTask('default', ['wiredep','includeSource:index']);
  grunt.registerTask('prod', ['clean',
                              'jshint',
                              'ngtemplates',
                              'uglify:prod',
                              'copy:prod',
                              'cssmin:prod',
                              'htmlmin:prod',
                              'spell']);
  
  
}; 