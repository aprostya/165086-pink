"use strict";

module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-browser-sync");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks('grunt-svg-sprite');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.initConfig({
      less: {
        style: {
          files: {
            "css/style.css": "less/style.less"
          }
        }
      },

      postcss: {
        style: {
          options: {
            processors: [
              require("autoprefixer")()
            ]
          },
          src: "css/*.css"
        }
      },

      browserSync: {
        server: {
          bsFiles: {
            src: [
              "*.html",
              "css/*.css"
            ]
          },
          options: {
            server: ".",
            watchTask: true,
            notify: false,
            open: true,
            cors: true,
            ui: false
          }
        }
      },
      svg_sprite: [{
        expand: true,
        src: ['img/svg/*.svg'],
        dest: 'img/spritesheet',

        options: {
          mode: {
            inline: true,
            symbol: true,
            css: false
          }
        }
      }],

      watch: {
        style: {
          files: ["less/**/*.less"],
          tasks:
            ["less", "postcss"]
        }
      },

      uglify: {
        build: {
          src: 'js/build/production.js',
          dest:
            'js/build/production.min.js',
        }
      },

      concat: {

        dist: {
          src: [
            'js/libs/*.js', // All JS in the libs folder
            'js/controls.js', // This specific file
          ],
          dest:
            'dist/built.js',
        }
      }
    }
  );

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask('default', ["uglify"]);
  grunt.registerTask('default', ['concat', 'uglify']);
};
