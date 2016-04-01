module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/bower-angular-router/angular1/angular_1_router.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/app.js',
            'app/**/*.es6',
            'app/tests/*.js',
            'app/tests/*.es6'
            //'app/view*/**/*.js'
            //'app/components/**/*.js',
            //'app/bower_components/angular-route/angular-route.js',
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
