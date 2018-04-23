let express = require("express");
let routes = express.Router();
let personcontroller = require("../controllers/person_controller");

routes.get('/persons', personcontroller.readPersons);
routes.post('/addPerson', personcontroller.addPerson);

module.exports = routes;