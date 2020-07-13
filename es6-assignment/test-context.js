require("babel-polyfill");

var context = require.context('./src/specs', true, /-spec\.js$/);
context.keys().forEach(context);