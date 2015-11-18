#!/usr/bin/env node
var prerender = require('./lib'),
    server = prerender({
        port: 3001,
        workers: 4,
        iterations: 20,
        jsTimeout: 1000,
        noJsExecutionTimeout: 5000
    });

// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
// server.use(prerender.blacklist());
server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

server.start();
