const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String },
    image: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);