exports.shorthands = undefined

exports.up = function up(pgm) {
  pgm.renameTable("expenses", "funds")
}