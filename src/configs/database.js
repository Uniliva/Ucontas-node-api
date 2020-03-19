const mongoose = require('mongoose');

mongoose.connect('mongodb://root:unisenha@localhost/ucontasDB', { useNewUrlParser: true , useUnifiedTopology: true });

//mongoose.Promise = global.Promise;

module.exports = mongoose;
