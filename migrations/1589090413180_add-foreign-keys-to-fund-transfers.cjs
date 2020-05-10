exports.shorthands = undefined

exports.up = function up(pgm) {
  pgm.alterColumn('fund_transfers', 'source_fund_id', {type: 'integer'})

  pgm.alterColumn('fund_transfers', 'destination_fund_id', { type: 'integer' })

  pgm.addConstraint(
    'fund_transfers',
    'fund_transfers_source_fund_id_fk',
    'FOREIGN KEY (source_fund_id) REFERENCES funds (id)'
  )

  pgm.addConstraint(
    'fund_transfers',
    'fund_transfers_destination_fund_id_fk',
    'FOREIGN KEY (destination_fund_id) REFERENCES funds (id)'
  )
}