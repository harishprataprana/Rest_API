const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    roll: {
        type: Number
    },
    age: {
        type: Number
    },
    std: {
        type: String
    }
});


mongoose.model('Student', studentSchema);