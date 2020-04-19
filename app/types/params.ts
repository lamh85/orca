// TODO: I created too many types for practice.
// Don't have to use them yet.

enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

enum FinancialColumn {
  name = 'name',
  description = 'description',
  amount = 'amount',
  period_length = 'period_length',
  period_units = 'period_units'
}

namespace ServerRequest {
  export interface Index {
    pageNumber: number,
    pageSize: number,
    sortColumn: FinancialColumn,
    sortDirection: SortDirection
  }

  export interface Destroy {
    id: number
  }
}