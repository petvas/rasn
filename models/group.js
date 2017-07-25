module.exports = function (sequelize, DataTypes) {
    const group = sequelize.define('group', {
        name: DataTypes.STRING,
    })

    return group
}