const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctor');

//Get all doctors
router.route('/doctors').get((req, res) => {
    Doctor.find()
    .then(doctors => {
        res.json(doctors);
    })
    .catch(err => {
        res.status(400).json('Error:' + err);
    })
})

//Add new doctor
router.route('/add')
     .post((req, res) => {
        const {name, specialty} = req.body;
        
     })

