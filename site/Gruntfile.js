/**
 * Created by jian_ on 2016/3/31.
 */
module.exports = function (grunt) {
    // 加载插件
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec'
    ].forEach(function (task) {
        grunt.loadNpmTasks(task);
    }); // 配置插件
    grunt.initConfig({
        cafemocha: {
            all: {
                src: 'qa/tests-*.js', options: {ui: 'tdd'}
            }
        },
        jshint: {
            app: ['meadowlark.js', 'public/js/**/*.js', 'lib/**/*.js'],
            qa: ['Gruntfile.js', 'public/qa/**/*.js', 'qa/**/*.js']
        },
        exec: {
            linkchecker: {
                cmd: 'D:/ProgramFiles/LinkChecker/linkchecker.exe http://localhost:3000'
            }
        }
    }); // 注册任务
    grunt.registerTask('default', ['cafemocha', 'jshint', 'exec']);
};