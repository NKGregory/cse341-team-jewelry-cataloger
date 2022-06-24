const mongoose = require("mongoose")

const User_Insurance_Info_Schema = new mongoose.Schema({
    insurance_company: {
        type: String,
        required: false
    },
    insurance_agent: {
        type: String,
        required: false
    },
    insurance_policy: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('user_insurance_info', User_Insurance_Info_Schema);