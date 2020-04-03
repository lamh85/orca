exports.shorthands = undefined

exports.up = function up(pgm) {
  const periodUnitsDefault = function(tableName) {
    return {
      expenses: 'months',
      income_sources: 'years'
    }[tableName]
  }

  const commonColumns = function(tableName) {
    const columns = {
      id: 'id',
      name: {
        type: 'text',
        unique: true,
        notNull: true
      },
      description: {
        type: 'text',
        unique: true,
        notNull: true
      },
      amount: {
        type: 'numeric',
        notNull: true,
        default: 0
      },
      period_length: {
        type: 'numeric',
        notNull: true,
        default: 1
      },
      period_units: {
        type: 'text',
        check: "(period_units IN ('days', 'weeks', 'months', 'years'))",
        default: periodUnitsDefault(tableName)
      },
      createdAt: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp')
      }
    }

    return columns
  }

  pgm.createTable(
    'expenses',
    commonColumns('expenses')
  )

  pgm.createTable(
    'income_sources',
    commonColumns('income_sources')
  )
}