exports.config = {
    runner: 'local',
    //change specs for tests or run all
    specs: [
        './test/specs/**/*.js'
    ],
    //to use specs
    suites: {
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
        ],
    maxInstances: 3,
    capabilities: [
        {
        maxInstances: 5,
        browserName: 'chrome',
        }
        ],
    logLevel: 'error',
    coloredLogs: true,
    bail: 0,
    //baseUrl: 'http://localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 100000,
    connectionRetryCount: 3,
    services: ['chromedriver'
    ],
    framework: 'jasmine',
    reporters: ['spec','junit'
    ],

    jasmineOpts: {
       helpers: [require.resolve('@babel/register')
       ],
    defaultTimeoutInterval: 60000,
    expectationResultHandler: function(passed, assertion) {
       }
    },
    before: function (capabilities, specs) {
        browser.maximizeWindow()
    }
}