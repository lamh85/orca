# Compare expenses and income

## Mockup

INCOME
* regular salary
* bonus
* tax refund

EXPENSES
* mortgage
* strata
* heating
* laptop fund

## Technical Design

### Data Design

Examples of data types
* Regular salary
* Salary bonus
* Accounts receiveable
* Mortgage
* Laptop fund

Parlance - For brainstorming entity names.
* I earn regular salary every year.
* I take 4 years to save for a laptop.
* My mortgage costs _ every year.

Branstorm data entities
* Income Sources - all fields are required
  * Category - string
  * Description - text
  * Amount - decimal to 2 places
  * Disbursement length - integer
  * Disbursement units - days/months/years
* Expenses
  * Category - string
  * Description - text
  * Amount - decimal to 2 places
  * Disbursement length - integer
  * Disbursement units - days/months/years



### Flows

Create
* User inputs
* App updates totals

Read

Update
* User updates
* App updates totals

Delete
* User deletes
* App updates totals

Common attributes
* Item name
* Annual amount
