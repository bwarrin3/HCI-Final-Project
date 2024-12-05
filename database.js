var mysql = require('mysql2');
var express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.get("", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/index.html", function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/" + "login.html");
});

app.post("/login.html", function (req, res) {
    let idValue = -1;
    let idAge = 1000;

    var username = req.body.username;
    var password = req.body.password;

    var buttonFlag = req.body.register;
    console.log(buttonFlag);


    if(!buttonFlag){
    var sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    con.query(sql, [username, password], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            idValue = result[0].id;
            idAge = 900000;
        }
    });
    }
    else{
        var sql = 'INSERT INTO users(username, password) values( ? , ? )';
    con.query(sql, [username, password], function (err) {
        if (err) throw err;
    });
    }

    setTimeout(function () {
        if(buttonFlag){idValue = -3}
        res.cookie('userId', idValue, { maxAge: idAge });
        res.redirect("/" + "login.html");
    }, 250);
});

app.get("/Examples.html", function (req, res) {
    res.sendFile(__dirname + "/" + "Examples.html");
});

app.get("/rules.html", function (req, res) {
    res.sendFile(__dirname + "/" + "rules.html");
});

app.get("/quiz.html", function (req, res) {
    let score = -1;

    var sql = 'SELECT * FROM scores WHERE id = ?';
    con.query(sql, [req.cookies.userId], function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
            score = result[0].score;
        }
    });



    setTimeout(function () {
        res.cookie('userScore', score, { maxAge: 1000 });
        res.sendFile(__dirname + "/" + "quiz.html");
    }, 250);
    
});

app.post("/quiz.html", function (req, res) {
    if (req.cookies.userId && req.cookies.userId != -1) {
        var sql = 'INSERT INTO scores (id, score) VALUES (?, ?)';
        con.query(sql, [req.cookies.userId, req.body.quizScore], function (err, result) {
            if (err) throw err;
        });
    }

    res.redirect("/" + "quiz.html");
});

app.get("/rules.html", function (req, res) {
    res.sendFile(__dirname + "/" + "rules.html");
});

app.get("/team.html", function (req, res) {
    res.sendFile(__dirname + "/" + "team.html");
});

app.get("/contact.html", function (req, res) {
    res.sendFile(__dirname + "/" + "contact.html");
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
