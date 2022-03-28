var express = require('express');
var router = express.Router();
const User = require('../model/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post("/signin",(request,response)=>{
  User.find({email: request.body.email,password: request.body.password})
  .then(result=>{
    //console.log(result);
    response.json(result);
  })
  .catch(err=>{
    console.log(err);
  });
});
router.post("/signup",(request,response)=>{
   User.create({
    username: request.body.username,
    password: request.body.password,
    email: request.body.email
  }).then(result=>{
    response.status(201).json(result);
  }).catch(err=>{
    response.status(500).json({error: 'something went wrong..'});
  });
});
module.exports = router;
