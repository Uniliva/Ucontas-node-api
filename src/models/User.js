const Mongoose = require('../configs/database');
const bcrypt = require('bcrypt');

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

UserSchema.pre('save', async (next) => {

   await bcrypt.hash(this.password, 10, function(err, hash) {
        console.log(hash);    
        console.log(err);
    });
    next();
})

module.exports = Mongoose.model('User', UserSchema);