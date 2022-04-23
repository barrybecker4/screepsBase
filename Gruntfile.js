module.exports = function(grunt) {

    var config = require('./.screeps.json')
    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: config.email,
                token: config.token,
                branch: config.branch,
                server: config.server
            },
            dist: {
                src: ['src/*.js']
            }
        }
    });
}