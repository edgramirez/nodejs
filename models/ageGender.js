const mongoose = require('mongoose');

const PostsSchemaAgeGender = mongoose.Schema({
        clientId: {
                type: String,
                required: true
        },
        cameraId: {
                type: String,
                require: true
        },
        gender: {
                type: String,
                required: true
        },
        age: {
                type: String,
                required: true
        },
        epocTime: {
                type: String,
                required: true
        },
        date: {
                type: Date,
                default: Date.now
        }
});

module.exports = mongoose.model('ageGender', PostsSchemaAgeGender);
