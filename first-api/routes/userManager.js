const express = require('express');
const Model = require('../models/userModel');

const router = express.Router();

router.get('/getall', (req, res) => {
    
    Model.find({})
    .then((data) => {
        console.log('data successfully fetched');
        res.json(data);
    })
    .catch((err) => {
        console.error(err);
        res.send('failed'); 
    })
})

router.get('/getbyusername/:username', (req, res) => {
    
    let usernm = req.params.username;

    Model.findOne({username : usernm})
    .then((data) => {
        console.log('data successfully fetched');
        res.json(data);
    })
    .catch((err) => {
        console.error(err);
        res.send('failed'); 
    })
})

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
    .then((data) => {
        console.log('data successfully fetched');
        res.json(data);
    })
    .catch((err) => {
        console.error(err);
        res.send('failed'); 
    })
})

router.post('/add', (req, res) => {
    console.log('post add request');

    let data = req.body;
    console.log(data);

    new Model(data).save()
    .then(() => {
        console.log('data successfully added');
        res.status(200).json({"message" : "success"});
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    })
})

module.exports = router