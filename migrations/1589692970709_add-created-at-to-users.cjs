exports.up = function up(pgm) {
  const column = {
    created_at: {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp')
    }
  }

  pgm.addColumns('users', column)
}