exports.up = function up(pgm) {
  const column = {
    fund_id: {
      type: 'integer',
      notNull: true,
      references: 'funds'
    }
  }

  pgm.addColumns('fund_transfers', column)
}