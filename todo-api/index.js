var express = require('express');
var app = express();
const { check, validationResult } = require('express-validator/check');
var cors = require('cors');

var mongojs = require('mongojs');
var db = mongojs('todo' ,[ 'tasks' ]);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//curl -X POST localhost:8000/tasks -d "subject=Apple"
app.post('/tasks',[
     check('subject').exists()
] ,function(req,res) {
     var errors = validationResult(req);
     if (!errors.isEmpty()){
          return res.status(422).json({ errors: errors.array() });
     }
     var subject = req.body.subject;
     db.tasks.insert({ subject, status: 0 }, function(err,data) {
          res.json(data);
     });
});

app.get('/tasks/:id', function(req, res){
     var id = req.params.id;
     db.tasks.find({ '_id': mongojs.ObjectId(id) }, function(err,data) {
          res.json(data);
     });
});

app.get('/tasks/del/:id',function(req, res){
     var id = req.params.id;
     db.tasks.remove({ '_id': mongojs.ObjectId(id) }, function(err,data) {
          res.json(data);
     });
})

app.get('/tasks', function(req, res){
          //res.json({ data: 'task list' });
          var data = db.tasks.find(function(err,data){
               res.json(data);
          });

});

// CURL -X DELETE localhost:8000/tasks/5cbad39a19f96a3d9cb31785

app.delete('/tasks/:id', function(req, res){
     var id = req.params.id;

     db.tasks.remove({ '_id': mongojs.ObjectId(id) }, function(err,data){
          res.json(data);
     })
});

// CURL -X PATCH localhost:8000/tasks/5cbad39a19f96a3d9cb31785 -d "status = 0"

app.patch('/tasks/:id', function(req, res) {
     var id = req.params.id;
     var status = parseInt(req.body.status);

     db.tasks.update(
          { '_id': mongojs.ObjectId(id) },
          { $set: { status: status } },
          { multi: true },
          function(err, data){
               res.json(data);
          });
     });
// if (err) {
//      res.status(400).json(err);
// }
// else {
//      res.json(data);
// }

app.listen (8000, function(){
     console.log('todo api started at port 8000');
});
