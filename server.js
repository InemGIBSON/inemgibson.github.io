
const express = require('express');
const path = require('path');
const app = express();


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.use(express.static(__dirname + '/public'));


app.listen(8083, function() {
  console.log('Server now on, App is running on Port 8083');
});



