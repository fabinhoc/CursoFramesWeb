const mongoose = require('mongoose')
module.exports = mongoose.createConnection('mongodb://localhost/db_finance')

mongoose.Error.messages.general.required = "The atribute '{PATH}' is required"
