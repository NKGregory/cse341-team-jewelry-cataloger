const mongoose = require('mongoose');

const Market_Data_Schema = new mongoose.Schema({
    entry_date: {
        type: Date,
        default: Date.now
    },
    metal_name: {
        type: String,
        required: false
    },
    metal_karatage: {
        type: Number,
        required: false
    },
    metal_price: {
        type: Number,
        required: false
    },
    diamond_price_per_carat: {
        type: Number,
        required: false
    },
    gemstone_price_per_cart: {
        type: Number,
        required: false
    },
    labor_total: {
        type: Number,
        required: false
    },
    retail_modifier: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('market_data', Market_Data_Schema);