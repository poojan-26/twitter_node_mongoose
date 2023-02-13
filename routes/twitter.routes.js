const express = require('express')
const router = express.Router()
var credentials = require('../api/utils/credentials');

const userController = require('../api/v1/controllers/user.controller')

const tweetController = require('../api/v1/controllers/tweet.controller')

// for using of twitter dynamic data from website
var Twit = require('twit')



var T = new Twit({
  consumer_key:         credentials.consumer_key,
  consumer_secret:      credentials.consumer_secret,
  access_token:         credentials.access_token_key,
  access_token_secret:  credentials.access_token_secret,
  callbackURL:          'http://localhost:7000',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


T.get('/followers/ids', { screen_name: 'Poojan26' }, userController.getFollowers)

// T.get('trends/place', { id:20070458, count:2},  userController.getFollowers)
//it get the list of user id and whole data that follow @Poojan26
// T.get('followers/ids', { screen_name: 'Poojan26' }, userController.getFollowers)


// T.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
//   if(error) throw error;
//   console.log(tweet);  // Tweet body.
//   console.log(response);  // Raw response object.
// });

// T.post('statuses/update', {status:"hi"}, userController.PostTweet);


// T.get('statuses/user_timeline', { screen_name: 'pd01878328' }, userController.getdata)
  //   console.log(data)
  // })

// var params = {
//     status:'hello world!!!!',
//     count:100
// } 

  
// T.post('statuses/update', {status: 'hello world'}, PostTweet)

// function PostTweet(err,data, res){
//     console.log(data)
// }

//to create user 
router.post('/createuser', userController.createUser);

//to create tweet
router.post('/createtweet', tweetController.createtweet);

//to findone
router.get('/tweet', tweetController.findOne);

//to store word how many time use
router.get('/tweetCount', tweetController.wordCount)

//find word by id 
router.get('/tweetCount/id', tweetController.findWord)




module.exports = router