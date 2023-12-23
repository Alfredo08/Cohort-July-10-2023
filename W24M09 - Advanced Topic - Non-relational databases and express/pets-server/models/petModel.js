const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

const Pet = mongoose.model('pets', PetSchema);

module.exports = Pet;