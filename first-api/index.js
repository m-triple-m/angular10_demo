const express = require('express');
const app = express();
const userRouter = require('./routes/userManager');
const port = 5000;
const parser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(parser.json());

app.use('/user', userRouter);

app.get('/add', (req, res) => {
    console.log('request received!');
    res.send('here is the response!');
})

app.listen(port, () => {
    console.log("Server started at 5000!!");
});