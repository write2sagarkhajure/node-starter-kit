const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
var UserSchema = mongoose.Schema({
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
      });
    });
}