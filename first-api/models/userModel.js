const mongoose = require('../connection');

const schema = new mongoose.Schema({
    name : String,
    username : String,
    password : String,
    email : String
})

const model = mongoose.model('Users', schema);

module.exports = model;