const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/crud_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error',() => console.error.bind(console, 'connection error'));

db.once('open', () => console.info('Connection to Database is successful'));

module.exports = db;