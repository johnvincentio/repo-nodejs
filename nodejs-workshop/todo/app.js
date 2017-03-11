/*
middleware is software that is running before a request gets to the routes
*/
/*
SQL databases: mysql. postgres,
sequelize
*/

/* global require */

var express = require("express");
var app = express();
// app.use(express.static('public'));  // look here first

var expressHbs = require('express-handlebars');
var bodyParser = require('body-parser');

app.set('view engine', 'hbs');
app.engine('hbs', expressHbs({
    extname: 'hbs'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app'); // connection code

var Todo = mongoose.model('Todo', {
    task: {
        type: String,
        required: true
    }
});

//app.listen(3000, function() {
//    console.log("server is running");
//});

// var data = undefined;
//var data = [];
//var counter = 0;

app.get("/", function(req, res) {
    Todo.find(function(err, arrayOfItems) {
        res.render("index", {
            item: arrayOfItems
        });
    });
});

app.post("/client_to_server", function(req, res) {
    Todo.create({
        task: req.body.userData
    });
    res.redirect("/");
});

app.get('/delete/:id', function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!err) {
            todo.remove();
        } else {
            return err;
        }
    });
    res.redirect('/');
});

app.get("/edit/:id", function(req, res) {
    Todo.findById(req.params.id, function(err, item) {
        res.render("edit", {
            todo: item
        });
    });
});

app.post('/update/:id', function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        todo.task = req.body.updated_task;
        todo.save();
    });
    res.redirect('/');
});

app.get('/static', function(req, res) {
    res.sendFile('static_example.html', {
        root: "public"
    });
});

app.get("*", function(req, res) {
    res.redirect("/");
});

app.listen(3000, function(err) {
    if (err) {
        console.log('Server is not working ');
    } else {
        console.log('Server works');
    }
});


//app.get("/", function(req, res) { // index.hbs
//    res.render("index", {
//        item: data
//    });
//});
//
//app.post("/client_to_server", function(req, res) {
//    counter += 1;
//    req.body.id = counter; // add id to object as identifier
//    console.log(req.body); // Request entire object (with id)
//    data.push(req.body);
//    res.redirect("/");
//});
//
//app.get("/delete/:id", function(req, res) {
//    var id = +req.params.id; // convert id to integer
//    data.forEach(function(val, index, arr) {
//        if (val.id === id) { // if id matches
//            data.splice(index, 1); //remove object
//        }
//    });
//    res.redirect("/");
//});
//
//app.get("/abc", function(req, res) {
//    res.forward("/");
//});
//
//app.get('/static', function(req, res) {
//    res.sendfile('public/static_example.html');
//});
//
//app.get("*", function(req, res) {
//    res.redirect("/");
//});
