const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    mongoose.connect(process.env.db_url)
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Error while connecting'))
}

module.exports = connect;