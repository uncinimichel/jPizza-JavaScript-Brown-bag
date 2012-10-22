Feature: Example feature
	As a software developer
	I want to have stackoverflow working
	So that I can find an answare to my problem
  
  Scenario: Stackoverflow top question
    Given I am on the page : "http://stackoverflow.com/"
    When the page is loaded
    Then in the title of the page is writen: "Stack Overflow"
  
  Scenario: Stackoverflow all question
    Given I am on the page : "http://stackoverflow.com/questions"
    When the page is loaded
    Then in the title of the page is writen: "Newest Questions - Stack Overflow"