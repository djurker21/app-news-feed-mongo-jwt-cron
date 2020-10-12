require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

const cron = require('node-cron');
const getFeed = require('./cron/get-feed');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/feed', require('./news/news.controller'));
app.use('/favorites', require('./favorites/favorites.controller'));

// global error handler
app.use(errorHandler);

// Schedule tasks to be run on the server.
cron.schedule('59 13 * * *', function() {
    console.log('running a task every day on 13:59 ~ 2pm >>> ' + new Date());
    getFeed.run();
});

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
