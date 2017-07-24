const crypto = require('crypto');
const hash = crypto.createHash('sha256')

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        password: {
            type: DataTypes.VIRTUAL,
            set: function (val) {
                                
                this.salt = 'SALT-';
                //this.setDataValue('password', val)
                this.setDataValue('password_hash', hash.update(this.salt + val).digest('hex'))
            }
        },
    })

    return User
}