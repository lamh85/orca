# Development Guides

## Node

### Should use version 13 to support ES6.

Compatibility with ES6:
<br/>https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node

### Child processes

https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

## Migrations and `node-pg-migrate`

https://github.com/salsita/node-pg-migrate

REQUIRED
1. All the logic in the migration file must be wrapped in either of these exports:

```javascript
exports.shorthands = undefined

exports.up = function up(pgm) {}

exports.down = function down(pgm) {}
```

2. If the migration file is written in ES6, then the file extension must be `cjs` if `package.json` has this configuration: `"type": "module"`.