// index.js
require("./bin/kernel");
let serverless = require("serverless-http");
let express = require("express");
// Import the library:
let cors = require("cors");
let app = express();
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroSequelize)

app.use(cors());

const adminBro = new AdminBro( require('./AdminBro/options'))

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, require('./AdminBro/auth'))
// const router = AdminBroExpress.buildRouter(adminBro)


app.use(adminBro.options.rootPath, router)
app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))

module.exports = app;
module.exports.handler = serverless(app);
