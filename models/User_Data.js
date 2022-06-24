const mongoose = require("mongoose");

const User_Data_Schema = new mongoose.Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    email_address: {
        type: String,
        required: false
    },
    phone_number: {
        type: Number,
        required: false
    },
    street_address: {
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
    },
    zipcode: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('user_data', User_Data_Schema);