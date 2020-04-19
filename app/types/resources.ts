// TODO: I created too many types for practice.
// Don't have to use them yet.

interface IsUnique {
  id: number
}

type PeriodUnits = 'days' | 'weeks' | 'months' | 'years'

// https://www.typescriptlang.org/docs/handbook/mixins.html
interface IsFinancialFlow extends IsUnique {
  name: string,
  description: string,
  amount: number,
  period_length: number,
  period_units: PeriodUnits
}

namespace Resource {
  export interface Expense extends IsFinancialFlow {}
  export interface IncomeSource extends IsFinancialFlow {}
}
