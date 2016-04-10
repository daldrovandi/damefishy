module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/bower-angular-router/angular1/angular_1_router.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'app/bower_components/jquery/dist/jquery.js',
            'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',

            'app/app.js',
            //'app/tests/**/*.*.es6',
            'app/components/etsy/etsy.controller.es6',
            'app/components/etsy/etsy.service.es6',

            {
                pattern: 'app/tests/mock-data/*.json',
                watched: true,
                served: true,
                included: false
            },

            //'app/tests/*.js',
            'app/tests/**/*.es6'
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
