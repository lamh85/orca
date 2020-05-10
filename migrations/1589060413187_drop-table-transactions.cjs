exports.shorthands = undefined

exports.up = function up(pgm) {
  pgm.dropTable("transactions")
}