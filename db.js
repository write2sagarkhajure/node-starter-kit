const mongoose = require("mongoose");
require('dotenv').config();

const {
    DB_HOST: db_host,
    DB_NAME: db_name
} = process.env;

mongoose.connect(`mongodb://${db_host}/${db_name}`,{useNewUrlParser: true,useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('connected', function() {
  console.log('Database connected successfully');
});

db.on('error', function(err) {
  console.log('Error occured during database connection');
});