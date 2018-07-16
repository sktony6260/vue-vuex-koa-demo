require("babel-register")({
  babelrc:false,
  extends:'./.babelrc'
});
require("babel-polyfill");

require('./server.js');