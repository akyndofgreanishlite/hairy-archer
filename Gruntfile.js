module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'static/css/main.css' : 'static/scss/main.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: ['index.html'],
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['jshint'],
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],
            }
        },
        // compress: {
        //     main: {
        //         // options: {
        //         //     mode: 'gzip'
        //         // },
        //         expand: true,
        //         cwd: 'static/',
        //         src: ['**/*'],
        //         // dest: 'public/'
        //     }
        // }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.registerTask('default',['sass','watch']);
}
