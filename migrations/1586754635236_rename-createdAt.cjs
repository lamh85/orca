exports.shorthands = undefined

exports.up = function up(pgm) {
  pgm.renameColumn('expenses', 'createdAt', 'created_at')

  pgm.renameColumn('income_sources', 'createdAt', 'created_at')
}