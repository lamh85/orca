```
---
DEVELOPMENT TIPS 💻 🚀
---
```

# Design Patterns

Use composition over
* Imperative pattern
* Inheritance pattern

# Node

Child processes
<br/>https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

## ES6

How to use both `import` and `require`
<br/>https://stackoverflow.com/questions/59443525/require-not-working-in-module-type-nodejs-script

Should use Node 13 to support ES6.

Compatibility with ES6:
<br/>https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node

# Postgres

`node-postgress`
<br/>https://node-postgres.com/

Parsing PG error object
<br/>https://kb.objectrocket.com/postgresql/postgresql-node-errors-949

## Changing PG's port:

Show the config file:
```sh
psql -p PORT -U USERNAME -c 'SHOW config_file'
```

HOWEVER, this config might be overwritten by an environment variable. See below.

`psql` might not use the .conf config file. Will need to set the environmental variable like this. More info here: https://dba.stackexchange.com/questions/24154/postgresql-change-default-port-used-by-utilites-like-psql-createdb-etc
```sh
PGPORT=9876; export PGPORT
```

The above is the equivalent to:
```sh
psql -p 9876
```

## Generating Migration Files

You might get this error message:
```sh
Error: ENOENT: no such file or directory, open '/Users/Hon-Lam/Projects/orca/node_modules/node-pg-migrate/templates/migration-template.cjs'
```

But your file might be created anyway.

## Migrations

https://github.com/salsita/node-pg-migrate

All the logic in the migration file must be wrapped in either of these exports:

```javascript
exports.shorthands = undefined

exports.up = function up(pgm) {}

exports.down = function down(pgm) {}
```

If the migration file is written in ES6, then the file extension must be `cjs` if `package.json` has this configuration: `"type": "module"`.

**Otherwise, you might receive these errors**

Some of these are not the exact words. I forgot to copy them before fixing the error.
* `pgm` is not defined
* Rename your file to `cjs` or remove `"type": "module"`
* `Warning: require() of ES modules is not supported`

## Helpful Queries

```sql
-- List table columns
SELECT
  COLUMN_NAME
FROM
  information_schema.COLUMNS where TABLE_NAME = 'fund_transfers';

-- List foreign keys
SELECT
    tc.table_schema, 
    tc.constraint_name, 
    tc.table_name, 
    kcu.column_name, 
    ccu.table_schema AS foreign_table_schema,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
FROM 
    information_schema.table_constraints AS tc 
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
      AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name='fund_transfers';
```