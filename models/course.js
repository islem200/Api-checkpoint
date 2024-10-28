const mongoose = require('mongoose');
const { type } = require('os');

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date:{
        type:Date,
        default: Date.now(),
    },
    isPublished:{
        type: Boolean,
        default: false
    },
    price: Number,
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;

