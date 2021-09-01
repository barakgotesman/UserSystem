const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();


// connect to our database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'barakg'
});

app.use(cors());
app.use(express.json());
app.use(bodyPaser.urlencoded({ extended: true }));

// update user by id
app.put("/api/update", (req, res)=> {
    const userid = req.body.userid;
    const email = req.body.email;
    const username = req.body.username;
    const sqlUpdateQuery = "UPDATE SET email = ?, username =? WHERE userid = ?"

    db.query(sqlUpdateQuery, [email, username, userid], (err, result)=>{
        if(err)
            console.log(err)
        else
            res.send(result)
    })
})

// delete user by user id
app.delete('/api/delete/:userId', (req, res) => {
    const userId = req.params.userId;
    const sqlDeleteQuery = "DELETE FROM users WHERE id = ?";
    db.query(sqlDeleteQuery, userId, (err, result) => {
        if (err)
            {console.log(err)}
        else
            {res.send(result)}
    })
})

// get all users from users table
app.get('/api/get', (req, res) => {
    const sqlQuery = `SELECT * FROM users`;
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

app.post('/api/register', (req, res) => {
    const userName = req.body.name;
    const email = req.body.email;
    const lastConnection = req.body.lastConnection;
    const sqlQueryInsert =
        "INSERT INTO `users` (name,email,last_connection) VALUES(?,?,?)";
    db.query(sqlQueryInsert, [userName, email, lastConnection], (err, result) => {
        if (err)
            console.log(err);
        res.send(result);
        console.log(result);
    });
});

app.get('/', (req, res) => {
    res.send("test ")
});

app.listen(3001, () => {
    console.log("running on port 3001");
});