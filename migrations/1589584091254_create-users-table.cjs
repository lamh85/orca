exports.up = function up(pgm) {
  const columns = {
    id: 'id',
    email: {
      type: 'text',
      unique: true,
      notNull: true
    },
    password_encrypted: {
      type: 'text',
      notNull: true
    },
    authentication_token: {
      type: 'text',
      unique: true,
      notNull: true
    }
  }

  pgm.createTable('users', columns)
}