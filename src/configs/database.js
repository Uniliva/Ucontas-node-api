const mongoose = require('mongoose');

mongoose.connect('mongodb://root:unisenha@localhost:27017/admin', { useNewUrlParser: true , useUnifiedTopology: true })
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

module.exports = mongoose;
