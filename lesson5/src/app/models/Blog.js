const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String },
    body: { type: String },
    comments: [{ type: String, date: Date }],
    hidden: { type: Boolean },
    meta: { 
        votes: Number,
        favs: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);