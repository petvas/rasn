module.exports = function (sequelize, DataTypes) {
    const user = sequelize.import('./user.js')
    const group = sequelize.import('./group.js')
    
    const usergroup = sequelize.define('usergroup', {
    })

    user.belongsToMany(group, {
        through: usergroup
    })
    
    group.belongsToMany(user, {
        through: usergroup
    })
    return usergroup
}