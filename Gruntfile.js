"use strict";

module.exports = function (grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
      less: {
        style: {
          files: {
            "build/css/style.css": "less/style.less"
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
          src: "build/css/*.css"
        }
      },

      clean: {
        build: ["build"]
      },

      csso: {
        style: {
          options: {
            report: "gzip"
          },
          files: {
            "build/css/style.min.css":
              ["css/style.css"]
          }
        }
      },

      copy: {
        build: {
          files: [{
            expand: true,
            src: [
              "fonts/**/*{woff,woff2}",
              "img/**",
              "js/**",
              "**/*.html"
            ],
            dest: "build"
          }]
        }
      },

      browserSync: {
        server: {
          bsFiles: {
            src: [
              "build/*.html",
              "build/css/*.css"
            ]
          }
          ,
          options: {
            server: "build/",
            watchTask:
              true,
            notify:
              false,
            open:
              true,
            cors:
              true,
            ui:
              false
          }
        }
      },

      imagemin: {
        images: {
          options: {
            optimizationLevel: 3,
            progressive: true
          },
          files: [{
            expand: true,
            src: ["img/**/*.{png,jpg,svg}"]
          }]
        }
      },

      // posthtml: {
      //   options: {
      //     use: [
      //       require("posthtml-include")()
      //     ]
      //   },
      html: {
        files: [{
          expand: true,
          src: ["*.html"],
          dest: "build"
        }]
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

      watch:
        {
          style: {
            files: ["less/**/*.less"],
            tasks: ["less", "postcss", "csso"]
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
            'dist/build.js',
        }
      }
    }
  );

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask('default', ["uglify"]);
  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerInitTask("build", [
    "clean",
    "copy",
    "less",
    "postcss",
    "csso",
  ]);
};
