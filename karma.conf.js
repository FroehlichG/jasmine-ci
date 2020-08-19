module.exports = function (config) {
    config.set({
        frameworks: [
            'jasmine',
            'jasmine-matchers'
        ],
        preprocessors: {
            './app/js/*.js': ['coverage'],
            './app/tests/*.js': ['coverage'],
        },
        files: [
            './app/tests/custom-matchers.js',
            './app/tests/*.js',
            './app/js/*.js',
            './app/tests/*.spec.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers',
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        colors: true,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: 'html'
                }
            ]
        }

    });
};
