const mongoose = require("mongoose");


const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    likes: Number,
    description: {
        type: String,
        required: true
    },
    postImage: {
        type: String,
        required: true
    },
    date: String
});

const postModal = mongoose.model("post",postSchema);


module.exports = postModal;