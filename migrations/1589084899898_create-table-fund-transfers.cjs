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
    transaction_date: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    },
    amount: {
      type: 'numeric',
      notNull: true
    },
    source_fund_id: {
      type: 'numeric',
      notNull: true,
    },
    destination_fund_id: {
      type: 'numeric',
      notNull: true,
    },
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  }

  const options = {
    constraints: `
      FOREIGN KEY (source_fund_id, destination_fund_id) REFERENCES funds (id, id)
    `
  }

  pgm.createTable('fund_transfers', columns, options)
}