Feature: Registration Page

    Scenario: Valid Registration
        Given Go to Website URL
        When Go to Registration Page
        When Enter Valid Cradentials
        Then Press Register Button
        And Check Registration Successfuly