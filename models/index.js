const fs = require('fs')
const path = require('path')

module.exports = function (sequelize) {
    const db = {}
    fs
        .readdirSync(__dirname)
        .filter((fileName) => fileName.indexOf('.') && fileName !== path.basename(__filename))
        .forEach(function (fileName) {
            let model = sequelize.import(path.join(__dirname, fileName))
            db[model.name] = model
        })
    return db
}