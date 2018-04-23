class PersonList {


    constructor(){
        this._personlist = [];
    }

    add(person){
        this._personlist.push(person);
    }

    delete(person) {
        for (let i = 0; i < this._personlist.length; i++) {
            if (this._personlist[i] === person) {
                array.splice(i, 1);
            }
        }
    }

    getAll(){
        return this._personlist;
    }

    update(person){
        for (let i = 0; i < this._personlist.length; i++) {
            if (this._personlist[i] === person) {
                this._personlist[i] = person;
            }
        }
    }



}



module.exports = PersonList;