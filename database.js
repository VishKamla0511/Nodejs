var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kamla@0511",
  database : "netflix"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // con.query("select * from users", function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });

});

module.exports = con;