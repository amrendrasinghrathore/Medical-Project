const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    address: {
        house: {
            type: String,
            required: true
        },
        lane: {
            type: String,
            required: true
        },
        landmark: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Doctor', doctorSchema); 