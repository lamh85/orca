

const user = process.env.PGEUSER,
const host = process.env.PGEHOST,
const database = process.env.PGDATABASE,
const password = process.env.PGPASSWORD,
const port = process.env.PGPORT

// Example
// DATABASE_URL=postgres://username:password@host:5432/dateabase_name npm run migrate up"
const command = `DATABASE_URL=postgres://${user}:${password}@${host}:${port}/${database}`