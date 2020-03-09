@tested
  Feature: testfeature

    Scenario: Create an Analysis from the Analysis list page
      Given Open "login" page
      And Login to the app
      Then Verify that user is able to start analysis from Analysis page

    Scenario: Create an Analysis on homepage from aninvalid SRA Run ID
      Given Open "login" page
      And Login to the app
      Then click Analyze your sequencing data button
      And Fill in the form and submit
      And Click Select Rads and choose "Enter SRA Run ID"
      And Enter a "invalid" SRA Run ID
      When Click submit analysis
      Then Verify that system shows error message

    Scenario: Create an Analysis from the Quick Analysis button
      Given Open "login" page
      And Login to the app
      Then Click Quick Analysis button
      Then Verify that user is able to start analysis from Home page


    Scenario: Verify invalid SRA Run ID Quick Analysis
      Given Open "login" page
      And Login to the app
      Then Click Quick Analysis button
      Then Select "Enter SRA Run ID" option
      And Enter a "invalid" SRA Run ID
      When Click submit analysis
      Then Verify that system shows error message

    Scenario: Delete an analysis on the home page
      Given Open "login" page
      And Login to the app
      Then Verify that user is able to delete analysis from Home page

    Scenario: Delete an analysis on the home page and cancel
      Given Open "login" page
      And Login to the app
      Then Verify that user is able to cancel delete Analysis action

    Scenario: Delete an analysis from the Analysis list page
      Given Open "login" page
      And Login to the app
      Then Go to the "Analyses" page
      Then Verify that user is able to delete Analysis from Analyses page

     Scenario: Update name and description via home page and save
       Given Open "login" page
       And Login to the app
       Then Verify that user is able to edit Analysis at Home page

      Scenario: Update name and description via Analysis list page and save
        Given Open "login" page
        And Login to the app
        Then Verify that user is able to edit Analysis at Analyses page

      Scenario: Update name and description via Results page and save
        Given Open "login" page
        And Login to the app
        Then Verify that user is able to edit Analysis at Results page

