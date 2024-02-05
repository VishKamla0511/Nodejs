const connection = require('./database');

const bodyParser = require('body-parser');

const application = (req,res) => { 
    
    if(req.method === 'GET' && req.url === '/users'){
        
        connection.query("select * from users", function (err, result) {
            if (err) throw err;
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(result))
      });
    }

    if(req.method === 'DELETE' && req.url === '/users'){
        // console.log(req)
        let sql = `DELETE FROM users `
        connection.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(result))
    });
    }

    if(req.method === 'POST' && req.url === '/users'){
        // console.log(req)
        let user = req.body
        let sql = "insert into users (email, phone_no, passward, is_active) values (?,?,?,?)";
        connection.query(sql,[user.email,user.phone_no, user.passward, user.is_active], function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(result))
    });
    }

    if(req.method === 'PUT' && req.url === '/users'){
        // console.log(req)
        let {} = req.body
        let sql = 'UPDATE users set phone_no =? where id = ?';
        connection.query(sql,[user.phone_no, user.id], function (err, result) {
            if (err) throw err;
            // console.log(result);
            res.setHeader('Content-type', 'application/json')
            res.end(JSON.stringify(result))
    });
    }



}

module.exports = application;