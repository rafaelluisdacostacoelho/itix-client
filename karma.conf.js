'use strict';

module.exports = function(config) {
    config.set({
        basePath: './',
        files: [
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/jquery-ui/jquery-ui.js',
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-animate/angular-animate.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-ui-router/release/angular-ui-router.js',
            'app/bower_components/bootstrap/dist/js/bootstrap.js',
            'app/bower_components/moment/min/moment-with-locales.min.js',
            'app/bower_components/angular-moment-picker/dist/angular-moment-picker.min.js',
            'app/core/**/*.js',
            'app/common/**/*.js',
            'tests/unit/init.js'
        ],
        exclude: [],
        preprocessors: {
            'app/!(bower_components)/**/!(*Spec).js': ['coverage']
        },
        reporters: ['kjhtml', 'dots', 'junit', 'coverage'],
        autoWatch: true,
        colors: true,
        frameworks: ['jasmine'],
        browsers: ['Chrome', 'Firefox', 'PhantomJS'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-jasmine-html-reporter'
        ],
        singleRun: false,
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },
        junitReporter: {
            outputDir: 'unit-test-results',
            outputFile: 'testoutput.xml',
            useBrowserName: true,
            suite: 'unit'
        }
    });
};
