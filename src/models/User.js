const Mongoose = require('../configs/database');

const UserSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowerCase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: new Date()
    }

});

module.exports = Mongoose.model('User', UserSchema);