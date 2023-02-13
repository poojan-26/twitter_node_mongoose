var mongoose = require('mongoose')
TwitterStream = require('twitter-stream-api')
var credentials = require('./api/utils/credentials')
fs = require('fs')
mongoose.connect('mongodb://localhost/insert_sample')

var keys = {
  consumer_key:         credentials.consumer_key,
  consumer_secret:      credentials.consumer_secret,
  access_token:         credentials.access_token_key,
  access_token_secret:  credentials.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
};

var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({}, {"strict": false});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/update', {
status : 'hello how are you?'
});

// Twitter.post('statuses/update', { status: 'hello krupali' }, function(err, data, response) {
//       console.log(data)
//     })

// / listen for data from stream
    Twitter.on('data', function (obj) {

        var data =  obj.toString('utf8');
        console.log(data);
        var TwitterData = new User(data); // create object 
        TwitterData.save(); // save data to DB

    });