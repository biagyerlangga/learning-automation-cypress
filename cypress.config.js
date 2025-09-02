const { defineConfig } = require("cypress");

module.exports = defineConfig({

reporter:"cypress-mochawesome-reporter",
  env: {
    url : "https://rahulshettyacademy.com"
    // https://rahulshettyacademy.com
  },

  projectId: "j3a5os",
  e2e: {
    
    setupNodeEvents(on, config) {
      require ("cypress-mochawesome-reporter/plugin")(on)
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
