var webdriverjs = require('webdriverjs');


var World = function World(callback) {
  
  this.startBrowser = function () {
    this.browser = webdriverjs.remote({
            "host": "localhost",
            "desiredCapabilities": { "browserName": "firefox" }
          });
  };

  this.stopBrowser = function (callback) {
    this.browser.end(function () {
      callback();
    });
  };


  callback(); 
};

exports.World = World;
