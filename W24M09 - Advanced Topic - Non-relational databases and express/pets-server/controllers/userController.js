const express = require('express');
const userRoute = express.Router();
const User = require('./../models/userModel');


userRoute.post('/new/user', (req, res) => {
    const newUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    };

    User.create(newUser)
        .then((userDocument) => {
            return res.status(201).json(userDocument);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

userRoute.get('/users', (req, res) => {
    User.find()
        .then((userList) => {
            return res.status(200).json(userList);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

userRoute.get('/user/:email', (req, res) => {
    const userToFind = {
        email: req.params.email
    };

    User.findOne(userToFind)
        .then((userFound) => {
            if(!userFound){
                return res.status(404).json({message:'User not found in our db'});
            }
            return res.status(200).json(userFound);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

userRoute.put('/user/:email', (req, res) => {
    const fieldsToUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        password: req.body.password
    };

    User.findOneAndUpdate({email: req.params.email}, {$set: fieldsToUpdate}, {new: true})
        .then((updatedUser) => {
            return res.status(200).json(updatedUser);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

userRoute.delete('/user/:email', (req, res) => {
    User.deleteOne({email: req.params.email})
        .then(() => {
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
});

module.exports = userRoute;