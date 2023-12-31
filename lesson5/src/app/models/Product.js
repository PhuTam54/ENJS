const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number },
    qty: { type: Number },
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);