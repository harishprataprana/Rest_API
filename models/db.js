const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harish:Rana123@cluster0-3sypq.mongodb.net/student?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./student.model');