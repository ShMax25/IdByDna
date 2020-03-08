@tested
  Feature: testfeature

#Click the &quot;New Analysis&quot; button.
#Fill in the form and submit.
#Click “Select Reads” and choose
#“Enter SRA Run ID.”
#Enter a valid SRA Run ID.
#Click Submit.
#Analysis started
    Scenario: Create an Analysis from the Analysis list page
      Given Open "login" page
      And Login to the app
      Then Click the New Analysis button
      And Fill in the form and submit
      And Click Select Rads and choose "Enter SRA Run ID"
      And Enter a "valid" SRA Run ID
      When Click submit analysis
      Then Verify that Analysis started

