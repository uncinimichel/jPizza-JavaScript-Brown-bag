// features/step_definitions/myStepDefinitions.js

var exampleOfFeatureStepDefinition = function () {
  this.World = require("../../support/world.js").World; // overwrite default World constructor


  this.Given(/^I am on the page : "([^"]*)"$/, function(webPage, callback) {
  	this.startBrowser();
  	this.browser.init()
  	.url(webPage, callback);
  });

  this.When(/^the page is loaded$/, function(callback) {
  	callback();
  });

  this.Then(/^in the title of the page is writen: "([^"]*)"$/, function(expectedTitle, callback) {
	// express the regexp above with the code you wish you had
	var self = this;
	this.browser.getTitle(function(title) { 
			if (title == expectedTitle) {
				self.stopBrowser(callback); 
			}else{
				callback.fail('Expected: '+ expectedTitle + ', got: '+title);
			}
		});
	});


};

module.exports = exampleOfFeatureStepDefinition;
