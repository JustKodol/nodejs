let PersonList = require("../classes/PersonList");
let Person = require("../classes/Person");

let list = new PersonList();

module.exports = {

    readPersons(req, res, next) {
        res.status(200);
        res.json({"persons": list.getAll()});
        res.end();
    },

    addPerson(req, res, next) {

        if(req.body && req.body.firstname && req.body.lastname){
            let person = new Person("test", "test");
            list.add(person);
            res.status(200);
            res.json({"status": "saved"});
        } else {
            res.status(401);
            res.json({"status": "error no valid post request sended"});
        }


    }

}