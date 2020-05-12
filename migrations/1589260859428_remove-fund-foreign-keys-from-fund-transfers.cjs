exports.up = function up(pgm) {
  pgm.dropColumns(
    'fund_transfers',
    ['source_fund_id', 'destination_fund_id']
  )
}