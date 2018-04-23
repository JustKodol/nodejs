/**
 * --------------------------
 * HANDLE IMPORTS AND CONSTANTS
 * --------------------------
 */
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

/**
 * --------------------------
 * SETUP AND IMPORT ROUTES
 * --------------------------
 */
const person_routes = require("./routes/person_routes");

/**
 * --------------------------
 * SETUP APP/SERVER
 * --------------------------
 */
let app = express();

//CONNECT ROUTES
app.use("/api", person_routes);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

/**
 * --------------------------
 * GET REQUESTS
 */
 app.use('/bas', function(req, res, next){
    res.status(200);
    res.sendFile(__dirname + "/files/bas.html");
 });


/**
 * --------------------------
 * POST REQUESTS
 * --------------------------
 */


/**
 * --------------------------
 * NO VALID REQUEST RULE
 * --------------------------
 */
app.use('*', function(req, res, next){
    next({status: "not_found"});
});

app.use((err, req, res, next) => {
    res.status(404);
    res.sendFile(__dirname + "/files/404.html");
})

/**
 * --------------------------
 * SERVER START
 * --------------------------
 */

app.listen(port, () => {
    console.log("Server is listening on port : " + port);
});


