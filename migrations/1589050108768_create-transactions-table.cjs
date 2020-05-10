exports.shorthands = undefined

exports.up = function up(pgm) {
  const columns = {
    id: 'id',
    name: {
      type: 'text',
      unique: true,
      notNull: true
    },
    description: {
      type: 'text'
    },
    amount: {
      type: 'numeric',
      notNull: true
    },
    payer_id: {
      type: 'numeric',
      notNull: true
    },
    payee_id: {
      type: 'numeric',
      notNull: true
    },
    payer_fund_id: {
      type: 'numeric'
    },
    payee_fund_id: {
      type: 'numeric'
    },
    payment_date: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  }

  pgm.createTable(
    'transactions',
    columns
  )
}