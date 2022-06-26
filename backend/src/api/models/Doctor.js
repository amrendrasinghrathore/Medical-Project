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
    },
    address: {
        house: {
            type: String,
            required: false
        },
        lane: {
            type: String,
            required: false
        },
        landmark: {
            type: String,
            required: false
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        }
    }
}, {collection: "doctors"});

module.exports = mongoose.model('Doctor', doctorSchema); 