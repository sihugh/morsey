module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
            //options: {
            //    globals: {
            //        jQuery: true
            //    }
            //}
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'mochaTest']
        },
        // Configure a mochaTest task
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              //captureFile: 'results.txt', // Optionally capture the reporter output to a file
              quiet: false, // Optionally suppress output to standard out (defaults to false)
              clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
            },
          src: ['tests/**/*.js']
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['jshint', 'mochaTest']);

};
