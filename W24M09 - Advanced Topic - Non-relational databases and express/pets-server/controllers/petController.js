const express = require('express');
const petRoute = express.Router();
const User = require('./../models/userModel');
const Pet = require('./../models/petModel');

petRoute.post('/new/pet', (req, res) => {
    User.findOne({email: req.body.email})
        .then((foundUser) => {
            if(!foundUser){
                return res.status(404).json({message: 'Please provide an existing user'});
            }
            const newPet = {
                name: req.body.name,
                type: req.body.type,
                userId: foundUser._id
            }
            Pet.create(newPet)
                .then((petDocument) => {
                    return res.status(201).json(petDocument);
                })
        })
});

petRoute.get('/pets', (req, res) => {
    Pet.find()
        .populate('userId', ['firstName', 'lastName', 'email'])
        .then((petList) => {
            return res.status(200).json(petList);
        })
});


module.exports = petRoute;