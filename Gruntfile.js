module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'barrybecker4@gmail.com',
                token: 'fa3f7434-a7d5-411e-8439-12e73fa52516',
                branch: 'default',
                server: 'localhost'
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}