const homeRoute = function (server) {
    server.get('/', function (req, res, next) {
        res.send({msg: 'home'})
        next()
    })
}

module.exports = homeRoute