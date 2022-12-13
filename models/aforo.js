const mongoose = require('mongoose');

const PostsSchemaAforo = mongoose.Schema({
        deepStreamId: {
                type: String,
                required: true
        },
        direction: {
                type: Intl,
                require: true
        },
        cameraId: {
                type: String,
                require: true
        },
        date: {
                type: Date,
                default: Date.now
        }
});

module.exports = mongoose.model('aforo', PostsSchemaAforo);
