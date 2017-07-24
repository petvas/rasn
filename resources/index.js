const fs = require('fs')
const path = require('path')

module.exports = function (epilogue, models) {
    const resources = {}
    fs
        .readdirSync(__dirname)
        .filter((fileName) => fileName.indexOf('.') && fileName !== path.basename(__filename))
        .forEach(function (fileName) {
            const resource = require(path.join(__dirname, fileName))(epilogue, models)
            resources[resources.name] = resource
        })
    return resources
}