// https://medium.com/@katbusch/typescript-enums-explained-e5f9a101afc9
enum PeriodUnits {
  days = 'days',
  weeks = 'weeks',
  months = 'months',
  years = 'years'
}

export interface Expense {
  id: number,
  name: string,
  description: string,
  amount: number,
  period_length: number,
  period_units: PeriodUnits
}