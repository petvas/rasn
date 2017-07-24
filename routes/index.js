const fs = require('fs')
const path = require('path')

module.exports = function (server) {
    fs
        .readdirSync(__dirname)
        .filter((fileName) => fileName.indexOf('.') && fileName !== path.basename(__filename))
        .forEach(function (fileName) {
            require(path.join(__dirname, fileName))(server)
        })
}