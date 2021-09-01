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


app.get('/api/get', (res, req)=>{
    const sqlQuery = `SELECT * FROM users`;
    db.query(sqlQuery, (err, result) => {
        console.log(result)
    });
});

app.post('/api/register', (req, res) => {
    const userName = req.body.name;
    const ln = req.body.last_name;
    const g = req.body.gender;
    const locUser = req.body.location;
    const sqlQuery = `INSERT INTO users
    (name,last_name,gender,location) 
    VALUES({?},{?},{?},{?})`;
    db.query(sqlQuery, [userName, ln, g, locUser], (err, result) => {
        res.send(result);
    });
});

app.get('/', (req, res) => {

});

app.listen(3001, () => {
    console.log("running on port 3001");
});