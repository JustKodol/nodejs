class Person{

    constructor(firstname, lastname){
        this._firstname = firstname;
        this._lastname = lastname;
    }

    getFullName(){
        return this._firstname + " " + this._lastname;
    }
}

module.exports = Person;
