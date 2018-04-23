let mysql = require("mysql");

class Database{

    constructor(){
        this._host = "localhost";
        this._username = "root";
        this._password = "";
        this._databasename = "beer";
    }

    getConnection() {
        let con = mysql.createConnection({
            host: this._host,
            user: this._username,
            password: this._password,
            database: this._databasename
          });
          return con;
    }

    executeQuery(query, onsuccess, onerror) {
        let con = this.getConnection();
        con.connect(function (err) {
            if (err) {
                onerror(err);
            } else {
                con.query(query, function (err, result) {
                    if (err) {
                        onerror(err);
                    } else {
                        onsuccess(result);
                    }
                });
            }
        });
    }

    executeQueryValues(query, values, onsuccess, onerror) {
        let con = this.getConnection();
        con.connect(function (err) {
            if (err) {
                onerror(err);
            } else {
                con.query(query, values, function (err, result) {
                    if (err) {
                        onerror(err);
                    } else {
                        onsuccess(result);
                    }
                });
            }
        });
    }

    executeUpdateQuery(query, values , onsuccess, onerror){
        let con = this.getConnection();
        con.connect(function(err){
            if(err) {
                onerror(err);
            } else {
                con.query(query, [values], function (err, result) {
                    if(err){
                        onerror(err);
                    } else {
                        onsuccess(result);
                    }
                  });
            }
        });
    }

}


module.exports = Database;