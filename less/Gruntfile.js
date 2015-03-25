module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "Dmitre.Web.Public/Bootstrap/Themes/Dmitre/Content/site.css": "Dmitre.Web.Public/Bootstrap/Themes/Dmitre/Content/site.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['Dmitre.Web.Public/Bootstrap/Themes/Dmitre/Content/**/*.less','Dmitre.Web.Public/Bootstrap/Themes/Dmitre/Content/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
