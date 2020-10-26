const mongoose = require('mongoose');
const url = 'mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/example?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => {
    console.log('connection established!');
})
.catch((err) => {
    console.error(err);
})

module.exports = mongoose