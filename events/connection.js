// File to be used when connecting to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ponybotdb', {useNewUrlParser: true});

mongoose.connection.once('open', function(){
    console.log('The connection has been made!');
}).on('error', function(error){
    console.log('Connection error: ' + error);
});