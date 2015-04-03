var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    FirstName : String,
    LastName : String,
    Phone : Number,
    Address : String,
    City : String,
    State : String,
    Country : String,
    UserName : String,
    Password : String,
    DoB : { type: Date, default: Date.now }
});