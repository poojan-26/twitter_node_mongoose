const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 7000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())



// Configuring the database
const dbConfig = require('./api/utils/config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});

app.use(express.json());


// //import theater_db routes
const twitterRoutes = require('./routes/twitter.routes');

// //create routes(middleware)
app.use('/twitter/v1', twitterRoutes)


// // define a root/default route
// app.get('/', (req, res) => {
//    res.json({"message": "Hello World"});
// T.get('followers/ids', { screen_name: 'Poojan26' },  function (err, data, response) {
//     console.log(data)
//   })
// });

// listen for requests
app.listen(port, () => {
   console.log(`Node server is listening on port ${port}`);
});