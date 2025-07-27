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

        const newDoctor = new Doctor({ name, specialty});

        newDoctor.save()
        // Return the savedDoctor object\
           .then(savedDoctor =>{
               res.json(savedDoctor)
            .catch(
                erro =>
                    res.status(400)
                          .json('Error:' + err)                     
            );
           });

        // Update doctor data
        router.route('/update/:id')
            .post((req, res) => {
                 Doctor.findById(req.params.id)
                     .then(doctor => {
                        if (!doctor) {
                            return res.status(404)
                                .json('Doctor not found');
                        }

                        doctor.name = req.body.name;
                        doctor.specialty = req.body.speciality;

                        doctor.save()
                            .then(() => {
                                res.json('Doctor updated!')
                            })
                            .catch(err => {
                                res.status(400)
                                   .json('Error: ' + err)
                            })

                        .catch(err => {
                            res.status(400)
                                .json('Error:' + err):
                        })
                     })
            })
        
     })

