@tested
  Feature: testfeature

#    Scenario: Create an Analysis from the Analysis list page
#      Given Open "login" page
#      And Login to the app
#      Then Click the New Analysis button
#      And Fill in the form and submit
#      And Click Select Rads and choose "Enter SRA Run ID"
#      And Enter a "valid" SRA Run ID
#      When Click submit analysis
#      Then Verify that Analysis started

    Scenario: Create an Analysis on homepage from aninvalid SRA Run ID
      Given Open "login" page
      And Login to the app
      Then click Analyze your sequencing data button
      And Fill in the form and submit
      And Click Select Rads and choose "Enter SRA Run ID"
      And Enter a "invalid" SRA Run ID
      When Click submit analysis
      Then Verify that system shows error message


