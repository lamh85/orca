interface IsUnique {
  id: number
}

// https://www.typescriptlang.org/docs/handbook/mixins.html
interface IsFinancialFlow extends IsUnique {
  name: string,
  description: string,
  amount: number,
  period_length: number,
  period_units: PeriodUnits
}

// https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9
enum PeriodUnits {
  days = 'days',
  weeks = 'weeks',
  months = 'months',
  years = 'years'
}

namespace Resource {
  export interface Expense extends IsFinancialFlow {}
  export interface IncomeSource extends IsFinancialFlow {}
}
