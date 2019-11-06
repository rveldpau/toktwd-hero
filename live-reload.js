const app = require("./index");
const livereload = require("livereload");
// Create a livereload server
const reloadServer = livereload.createServer({
    // Reload on changes to these file extensions.
    //exts: [ 'json', 'mustache' ],
    // Print debug info
    delay: 500,
    debug: true
  });

  reloadServer.watch(__dirname);

  app.use(require('connect-livereload')({
    port: 35729
  }));