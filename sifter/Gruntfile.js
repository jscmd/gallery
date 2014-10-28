module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    pkg: pkg,

    copy: {
      main: {
        src: 'vendor/sifter/sifter.js',
        dest: 'src/sifter.js',
        options: {
          process: function (content, srcpath) {
            content = 'define(function(require, exports, module) {\n' + content + '\n});';
            return content;
          }
        }
      }

    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};

