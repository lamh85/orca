```
---
DEVELOPMENT TIPS 💻 🚀
---
```

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