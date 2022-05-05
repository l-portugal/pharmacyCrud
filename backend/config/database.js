const mongoose = require('mongoose');
const config = require('config');

const { host, dbName } = config.get('database');

const connect = async () => {

  const conn = await mongoose.connect(`mongodb://${host}/${dbName}`);
  const db = await conn.connection;

  db.on('error', function(err){
    console.log('DB connection error', err);
  })

  db.once('open', function(){
    console.log('Connection to DB successful');
  })

  return db;
}

module.exports = connect