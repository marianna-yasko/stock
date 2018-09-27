/**
 Grunt - project builder config
 **/

const basePath = '/app';
const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {

    grunt.initConfig({
        webpack: {
            options: {
                stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
            },
            prod: webpackConfig,
            dev: Object.assign({ watch: true }, webpackConfig)
        },
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: `./${basePath}/src/app.js`,
                dest: `./${basePath}/build/<%= pkg.name %>.min.js`
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('grunt-webpack', ['grunt-webpack']);

};
