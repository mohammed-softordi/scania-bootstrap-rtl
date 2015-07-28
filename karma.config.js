module.exports = function (config) {
    config.set({

        basePath: '',

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],

        files: [

            {pattern: 'bower_components/angular/angular.min.js', watched: false, include: true},
            {pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false, include: true},
            {pattern: 'bower_components/angular-cookies/angular-cookies.min.js', watched: false, include: true},
            {pattern: 'bower_components/angular-css/angular-css.min.js', watched: false, include: true},
            {pattern: 'bower_components/angular-localization/angular-localization.min.js', watched: false, include: true, served: true},
            {pattern: 'bower_components/angular-sanitize/angular-sanitize.min.js', watched: false, include: true, served: true},
            {pattern: 'bower_components/bootstrap/bootstrap.min.css', watched: false, include: true, served: true},
            {pattern: 'bower_components/bootstrap-rtl/dist/css/bootstrap-rtl.min.css', watched: false, include: true, served: true},
            {pattern: 'bower_components/underscore/underscore.js', watched: false, include: true},
            {pattern: 'bower_components/jquery/dist/jquery.js', watched: false, include: true}, ,
            {pattern: 'scania-bootstrap-rtl.js', watched: true, include: true},
            {pattern: 'test/**/*.spec.js', watched: true, include: true}
        ],

        exclude: [],

        preprocessors: {},

        reporters: ['progress'],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],
        junitReporter: {
            outputFile: 'test/test-results.xml',
            suite: ''
        },
        port: 9876,
        reportSlowerThan: 100,
        colors: true,
        logLevel: config.LOG_INFO,
        singleRun: false
    });
};
