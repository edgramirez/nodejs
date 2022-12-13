const mongoose = require('mongoose');

const BlackAndWhitelist = mongoose.Schema({
        clientId: {
                type: String,
                required: true
        },
        cameraId: {
                type: String,
                required: true
        },
	listType: {
		type: String,
		required: true
	},
        matchedId: {
                type: Intl,
                required: false
        },
        matchedName: {
                type: String,
                required: false
        },
        epocTime: {
                type: String,
                required: false
        },
        date: {
                type: Date,
                default: Date.now
        }
});

module.exports = mongoose.model('BlackAndWhiteList', BlackAndWhitelist);
