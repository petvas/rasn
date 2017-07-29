const homeRoute = function (server, restify) {
    server.get('/', restify.plugins.serveStatic({
        directory: './public',
        default: '/index.html'
    }))
}

module.exports = homeRoute