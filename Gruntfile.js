module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    wp_readme_to_markdown: {
      target: {
        files: {
          '../wordpress-hum/README.md': '../wordpress-hum/readme.txt'
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-wp-readme-to-markdown');

  // Default task(s).
  grunt.registerTask('default', ['wp_readme_to_markdown']);
};
