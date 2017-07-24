const userResource = function (epilogue, models) {
    return epilogue.resource({
        model: models.user,
        endpoints: ['/users', '/users/:id']
    })
}
module.exports = userResource