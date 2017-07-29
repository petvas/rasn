const Sequelize = require('sequelize')
const epilogue = require ('epilogue')
const restify = require('restify')


const app = server = restify.createServer()
app.use(restify.plugins.queryParser()) // Parses URL query paramters into req.query.
app.use(restify.plugins.bodyParser()) // parses POST bodies to req.body. automatically
app.use(restify.plugins.jsonp()) // not work :(
app.use(restify.plugins.gzipResponse()) // gzips the response if client accepts it

// import routes
require('./routes')(server, restify)

const sequelize = new Sequelize('database', '', '', {
    dialect: 'sqlite',
    storage: './db/database.sqlite'
})
const models = require('./models')(sequelize)

//sequelize.sync()

epilogue.initialize({
    app: app,
    sequelize: sequelize
})

// Import REST resource
const resources = require('./resources')(epilogue, models)

sequelize
    .authenticate()
    .then(() => {
        console.log(' Database connection has been established successfully.')
        server.listen(process.env.PORT || 3000, process.env.HOST || 'localhost', function () {
            let host = server.address().address,
                port = server.address().port;

            console.log('listening at http://%s:%s', host, port)
        })
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err)
    })
